import { useNavigate } from "react-router-dom";
import type { CardItemType } from "../types/product"
import { useBasket } from "../context/Providers/BasketProvider";


type CardItemProps = {
  card: CardItemType;
};


export function CardItem( {card} : CardItemProps) {
  const navigate = useNavigate();
  const { addItem } = useBasket();

  return (
    <div className="CardItem" onClick={() => navigate(`/product/${card.id}`)}>
      <img src={card.photoUrl} alt={card.title} className="CardItem__img" />
      <div className="CardItem__content">
        <h3 className="CardItem__price">{card.price.toFixed(2)} USD</h3>
        <span className="CardItem__span"></span>
        <h3 className="CardItem__name">{card.title}</h3>
        <h3 className="CardItem__brand">{card.brand}</h3>
        <div className="CardItem__footer">
          <h3 className="CardItem__weight">{card.weight}</h3>
          <button className="CardItem__button" onClick={(e) => {
            e.stopPropagation();
            addItem({
              id: card.id,
              productId: card.id,
              title: card.title,
              price: card.price,
              quantity: 1,
              photoUrl: card.photoUrl,
            });
          }}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}