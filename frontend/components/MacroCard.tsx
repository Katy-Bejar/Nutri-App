import { MacroType, macroConfig } from '@/types';

interface MacroCardProps {
  type: MacroType;
  grams: number;
  percentage: number;
}

const config = {
  protein: { color: "nutriProtein", label: "Proteínas" },
  carbs: { color: "nutriCarbs", label: "Carbos" },
  fats: { color: "nutriFats", label: "Grasas" },
} as const; // <-- Importantísimo el 'as const'

export default function MacroCard({ type, grams, percentage }: MacroCardProps) {
    const { color, label } = macroConfig[type];

  return (
    <div className={`bg-${color}-50 p-4 rounded-lg text-center`}>
      <p className={`text-${color}-600 font-semibold`}>{label}</p>
      <p className="text-2xl font-bold mt-1">{grams}g</p>
      <p className={`text-${color}-400 mt-1`}>{percentage}%</p>
    </div>
  );
}