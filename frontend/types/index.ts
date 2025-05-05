export type MacroType = "protein" | "carbs" | "fats";

export interface NutritionData {
  protein: number;
  carbs: number;
  fats: number;
}

export interface MacroDetails {
    grams: number;
    percentage: number;
  }
  
export interface MacroCardConfig {
  color: string;
  label: string;
}

// Tipos para el objeto de configuración
export const macroConfig: Record<MacroType, MacroCardConfig> = {
  protein: { color: "nutriProtein", label: "Proteínas" },
  carbs: { color: "nutriCarbs", label: "Carbos" },
  fats: { color: "nutriFats", label: "Grasas" }
} as const;