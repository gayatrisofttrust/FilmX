from fastapi import FastAPI
from src.api.controller import router
from src.db.connection import engine
from src.db.connection import Base
from fastapi.middleware.cors import CORSMiddleware
from mangum import Mangum

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://my-testfrontend-app.s3-website-us-east-1.amazonaws.com/", "http://localhost:5173"
    ],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)
Base.metadata.create_all(bind=engine)
app.include_router(router)
handler = Mangum(app)