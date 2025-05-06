// app/cards/[id]/page.tsx
import { articles } from "../../data/articles";
import { notFound } from "next/navigation";

export default function CardDetailPage({ params }: { params: { id: string } }) {
  const card = articles[Number(params.id)];

  if (!card) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl text-gray-200 font-bold mb-4">{card.title}</h1>
      <p className="text-lg text-gray-200 leading-relaxed">
        {card.article.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            {index < card.article.split("\n").length - 1 && <br />}
          </span>
        ))}
      </p>
    </div>
  );
}