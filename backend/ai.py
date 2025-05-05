# backend/ai.py
def analyze_nutrients(protein, carbs, fats, user_goal):
    alerts = []
    if protein < user_goal["protein"] * 0.8:
        alerts.append("Aumenta tu consumo de proteínas")
    if carbs > user_goal["carbs"] * 1.2:
        alerts.append("Reduce carbohidratos")
    return alerts