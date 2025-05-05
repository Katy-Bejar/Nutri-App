/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          nutriProtein: "#3b82f6",  // Azul
          nutriCarbs: "#f59e0b",     // Amarillo
          nutriFats: "#ef4444",      // Rojo
        },
      },
    },
    plugins: [],
  }