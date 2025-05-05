'use client'; // Añade esto al inicio del archivo

import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface NutritionChartProps {
  protein: number;
  carbs: number;
  fats: number;
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

export default function NutritionChart({ protein, carbs, fats }: NutritionChartProps) {
  const data = [
    { name: 'Proteínas', value: protein },
    { name: 'Carbohidratos', value: carbs },
    { name: 'Grasas', value: fats },
  ];

  return (
    <div style={{ width: '100%', height: 300 }}>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}