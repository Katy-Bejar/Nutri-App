from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models.food_log import Base, FoodLog  # Asegúrate de importar Base
from schemas.food import FoodItem
import os

app = FastAPI()

# Configura CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Permite todos los orígenes (solo para desarrollo)
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuración de la base de datos
DATABASE_URL = "sqlite:///./nutri.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})

# Crea las tablas si no existen
Base.metadata.create_all(bind=engine)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

@app.post("/api/food")
async def log_food(food: FoodItem):
    db = SessionLocal()
    try:
        db_food = FoodLog(
            name=food.name,
            protein=food.protein,
            carbs=food.carbs,
            fats=food.fats
        )
        db.add(db_food)
        db.commit()
        db.refresh(db_food)
        return {"protein": food.protein, "carbs": food.carbs, "fats": food.fats}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))
    finally:
        db.close()

@app.get("/")
async def root():
    return {"message": "¡API de Nutrición funcionando!"}