import type { Metadata } from "next";
import "./globals.css";  // 👈 Importa Tailwind

export const metadata: Metadata = {
  title: "NutriAI",
};

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es" className="h-full">
        <body className="h-full">{children}</body>
      </html>
    )
  }