interface CardProps {
  title: string
  description: string
}

export default function Card({ title, description }: CardProps) {
  return (
    <div className="bg-white border rounded-xl p-4 hover:shadow-md transition">
      <div className="text-orange-500 font-semibold text-sm">{title}</div>
      <p className="text-gray-600 text-sm mt-1">{description}</p>
    </div>
  )
}
