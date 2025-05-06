// pages/cards/[id].tsx
import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import { CardItem } from "../data/article-items";

interface CardDetailProps {
  card: CardItem;
}

export default function CardDetail({ card }: CardDetailProps) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img src={card.image} alt={card.title} className="w-full h-64 object-cover rounded-xl mb-6" />
      <h1 className="text-3xl font-bold mb-4">{card.title}</h1>
      <p className="text-lg text-gray-700 leading-relaxed">{card.description}</p>
    </div>
  );
}

// Dummy data (replace with real data source or API later)
const cardData: CardItem[] = [
  {
    title: "Explore the Mountains",
    description: "Full description of mountain adventures...",
    image: "https://source.unsplash.com/random/800x600?mountain",
    buttonText: "Explore",
  },
  {
    title: "Beach Vibes",
    description: "Long description of beach life...",
    image: "https://source.unsplash.com/random/800x600?beach",
    buttonText: "Book Now",
  },
];

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: cardData.map((_, index) => ({
      params: { id: index.toString() },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const id = Number(context.params?.id);
  const card = cardData[id];
  return {
    props: {
      card,
    },
  };
};