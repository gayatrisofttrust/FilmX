import os
from yoyo import read_migrations, get_backend
from dotenv import load_dotenv

load_dotenv(dotenv_path=os.path.join(os.path.dirname(__file__), '.env'))

DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_HOST = os.getenv('DB_HOST')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = os.getenv('DB_NAME')

db_url = f'postgresql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'
backend = get_backend(db_url)
migrations = read_migrations(os.path.join(os.path.dirname(__file__), 'migrations'))

with backend.lock():
    backend.apply_migrations(backend.to_apply(migrations))
