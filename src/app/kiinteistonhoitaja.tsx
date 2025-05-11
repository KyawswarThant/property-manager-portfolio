import ArcticleList from "./articles/article-list";
import { articles } from "./data/articles";

export default function Kiinteistonhoitaja() {
  return (
    <>
      <ArcticleList items={articles} />
    </>
  );
}