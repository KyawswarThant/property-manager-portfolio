import ArcticleList from "./articles/article-list";
import { CardItem } from "./data/article-items";

export default async function Kiinteistonhoitaja() {
  const articles: CardItem[]= await fetchArticles();
  return (
    <>
      <ArcticleList items={articles} />
    </>
  );
}

export async function fetchArticles() {
  const res = await fetch("https://pm-portfolio-backend.onrender.com/articles");
  if (!res.ok) {
    throw new Error("Failed to fetch works");
  }
  return res.json();
}