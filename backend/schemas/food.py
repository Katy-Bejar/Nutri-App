from pydantic import BaseModel

class FoodItem(BaseModel):
    name: str
    protein: float
    carbs: float
    fats: float