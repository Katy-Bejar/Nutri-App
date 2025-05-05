export const logFood = async (foodData: {
    name: string;
    protein: number;
    carbs: number;
    fats: number;
  }) => {
    const response = await fetch('http://localhost:8000/api/food', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(foodData),
    });
    return response.json();
  };