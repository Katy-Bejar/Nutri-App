// frontend/app/page.tsx
import Link from 'next/link'

export default function Home() {
  return (
    <div className="p-8 h-full"> {/* Añadí h-full */}
      <h1 className="text-2xl font-bold">Bienvenido a NutriAI</h1>
      <Link
        href="/dashboard"
        className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
      >
        Ir al Dashboard
      </Link>
    </div>
  )
}