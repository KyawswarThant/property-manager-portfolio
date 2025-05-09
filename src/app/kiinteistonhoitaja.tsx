import CardList from "./articles/card-list";
import { articles } from "./data/articles";

export default function Kiinteistonhoitaja() {
  return (
    <>
      <CardList items={articles} />
    </>
  );
}