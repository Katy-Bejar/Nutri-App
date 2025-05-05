import NutritionChart from '@/components/NutritionChart';
import MacroCard from '@/components/MacroCard';
import { MacroDetails } from '@/types';

export default function Dashboard() {
  const macros: Record<string, MacroDetails> = {
    protein: { grams: 30, percentage: 50 },
    carbs: { grams: 20, percentage: 33 },
    fats: { grams: 10, percentage: 17 },
  };

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-3xl font-bold text-center text-nutriProtein mb-8">
          Registra tu alimento
        </h1>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Ej: Pollo"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-nutriProtein focus:outline-none"
          />
          <button
            type="submit"
            className="w-full bg-nutriProtein text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
          >
            Guardar
          </button>
        </form>

        <div className="mt-8">
        <NutritionChart 
            protein={macros.protein.grams}
            carbs={macros.carbs.grams}
            fats={macros.fats.grams}
        />
          
          <div className="grid grid-cols-3 gap-4 mt-6">
          <MacroCard type="protein" grams={macros.protein.grams} percentage={macros.protein.percentage} />
          <MacroCard type="carbs" grams={macros.carbs.grams} percentage={macros.carbs.percentage} />
          <MacroCard type="fats" grams={macros.fats.grams} percentage={macros.fats.percentage} />
        </div>
        </div>
      </div>
    </main>
  );
}