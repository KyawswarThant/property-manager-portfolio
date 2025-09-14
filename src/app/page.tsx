import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import Kiinteistonhoitaja from "./kiinteistonhoitaja";

export default function Home() {
  return (
    <>
      <Kiinteistonhoitaja />
    </>
  );
}