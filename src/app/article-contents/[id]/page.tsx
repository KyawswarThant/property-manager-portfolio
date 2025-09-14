import { notFound } from "next/navigation";
import { fetchArticles } from "@/app/kiinteistonhoitaja";
import { CardItem } from "@/app/data/article-items";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function ArticlePage({ params }: PageProps) {
  const articles: CardItem[]= await fetchArticles();
  const { id } = await params;
  const card = articles[Number(id)];

  if (!card) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={card.image}
        alt={card.title}
        className="w-full h-64 object-cover rounded-xl mb-6"
      />
      <span className="text-xs text-gray-200">
        FI: Kuvan loi tekoäly OpenAI:n avulla.
      </span>
      <h1 className="text-3xl text-gray-200 font-bold mt-4 mb-4">{card.title}</h1>
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