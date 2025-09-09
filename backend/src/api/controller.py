from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.db.connection import SessionLocal
from src.db.models import User, Subscription, Payment
from pydantic import BaseModel

router = APIRouter()

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@router.post("/users")
def create_user(name: str, email: str, db: Session = Depends(get_db)):
    user = User(name=name, email=email)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

@router.get("/users")
def list_users(db: Session = Depends(get_db)):
    return db.query(User).all()

class SubscriptionCreate(BaseModel):
    user_id: int

@router.post("/subscriptions")
def create_subscription(payload: SubscriptionCreate, db: Session = Depends(get_db)):
    sub = Subscription(user_id=payload.user_id, active=True)
    db.add(sub)
    db.commit()
    db.refresh(sub)
    return sub

class PaymentCreate(BaseModel):
    user_id: int
    amount: float

@router.post("/payments")
def create_payment(payload: PaymentCreate, db: Session = Depends(get_db)):
    payment = Payment(user_id=payload.user_id, amount=payload.amount)
    db.add(payment)
    db.commit()
    db.refresh(payment)
    return payment

