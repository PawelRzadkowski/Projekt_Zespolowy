#Plik odpowiedzialny za konfigurację połączenia z bazą danych SQLite oraz za tworzenie sesji i podstawowego obiektu Base dla modeli SQLAlchemy.

from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

SQLALCHEMY_DATABASE_URL = "sqlite:///./tasks.db"

# Tworzenie silnika połączenia z bazą danych
engine = create_engine(
    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
)

# Konfiguracja sesji do pracy z bazą
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Obiekt bazowy dla wszystkich modeli
Base = declarative_base()