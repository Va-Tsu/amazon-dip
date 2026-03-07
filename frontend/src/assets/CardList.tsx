import type { CardItemType } from "../types/product";
import { CardItem } from "./CardItem";

type CardListProps = {
  cards: CardItemType[];
  limit?: number;
};

export function CardList({ cards, limit }: CardListProps) {
  const visbleCards = limit ? cards.slice(0, limit) : cards;
  return (
    <section className="CardList">
      {visbleCards.map((card) => (
        <CardItem key={card.id} card={card}/>
      ))}
    </section>
  );
}