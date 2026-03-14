import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { CardList } from "../../../assets/CardList";
import { mockCards } from "../../../types/testData"
import { useBasket } from "../../../context/Providers/BasketProvider";
import type { CardItemType } from "../../../types/product";

export function YommingoBasket() {

  const { basket } = useBasket();
  const basketCards = basket
  .map(item => mockCards.find(card => card.id === item.id))
  .filter((card): card is CardItemType => Boolean(card));
  
  return (
  <section className="basket">
    <Header/>
      <section className="basket__content">

        <div className="basket__banner">
          <h1 className="basket__banner__title">Basket</h1>
          <img className="basket__banner__img" src="/imgs/icons/basket/bag.svg" alt="" />
        </div>

        <section className="basket__breadcrumb">
          <Link className="basket__breadcrumb__link" to={'/'}>Home</Link> / <Link className="basket__breadcrumb__link" to={'/basket'}>Basket</Link>
        </section>

        <section className="basket__main">
          <h1 className="basket__main__title">Basket</h1>
          {basket.length !== 0 ? (
            <CardList limit={basket.length} cards={basketCards}/>
          ) : null}
          <button className="basket__main__btn">Go to order</button>
        </section>

        <section className="basket__viewed">
          <h1 className="basket__viewed__title">Viewed</h1>
          <CardList limit={4} cards={mockCards} />
        </section>
      </section>
    <Footer/>
  </section>
  )
}