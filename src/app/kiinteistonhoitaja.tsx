import Articles from "./articles/page";
import { articles } from "./data/articles";

export default function Kiinteistonhoitaja() {
  return (
    <>
      <Articles items={articles} />
    </>
  );
}