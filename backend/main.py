from fastapi import FastAPI, Depends

from fastapi.middleware.cors import CORSMiddleware

from sqlalchemy.orm import Session
from backend.database import Base, engine, SessionLocal
from backend.models import Patient

app = FastAPI(title="Pharma SaaS Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # in production, replace * with your frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

Base.metadata.create_all(bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.get("/")
def root():
    return {"message": "Pharma SaaS backend is running 🚀"}

@app.get("/patients")
def list_patients(db: Session = Depends(get_db)):
    return db.query(Patient).all()
