# backend/routes/nutrition.py
from fastapi import APIRouter
from models.food_log import FoodLog

router = APIRouter()

@router.get("/nutrition")
async def get_nutrition(user: str):
    # Lógica para calcular macronutrientes
    return {"protein": 120, "carbs": 200, "fats": 50}

@router.post("/food")
async def log_food(food_data: dict):
    # Guardar en DB
    return {"status": "Food logged!"}