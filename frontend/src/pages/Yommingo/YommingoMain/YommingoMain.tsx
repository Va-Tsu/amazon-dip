//#region Imports
import { Link } from "react-router-dom";
import { CardList } from "../../../assets/CardList";
//import { mockCards } from "../../../types/testData";
import { useEffect, useState } from "react";
import { Header } from "../../../assets/Header";
import { Footer } from "../../../assets/Footer";
import { Slider } from "../../../assets/CatalogSlider/CatalogSlider";
import type { CardItemType } from "../../../types/product";
import { getNewProducts, getRecommendedProducts } from "../../../api/product";
//#endregion


export function YommingoMain() {
  const [limit, setLimit] = useState(4);
  const [newProducts, setNewProducts] = useState<CardItemType[]>([]);
  const [forYou, setForYou] = useState<CardItemType[]>([]);

  useEffect(() => {

    getNewProducts().then(setNewProducts).catch(console.error);
    getRecommendedProducts().then(setForYou).catch(console.error);
    const mediaQuery = window.matchMedia('(max-width: 767px)');

    const handleChange = (e: MediaQueryList | MediaQueryListEvent): void => {
      setLimit(e.matches ? 2 : 4);
    };

    handleChange(mediaQuery);

    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return (
    <section className="yommingo">

      <Header />

      <section className="mainpage">
        <h1 className="mainpage__title">Your best choice of products from around the world</h1>
        <div className="mainpage__buttons">
          <button onClick={() => window.location.href = "/auth/register"} className="mainpage__buttons__button">Registration</button>
          <button className="mainpage__buttons__button">Buy now</button>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits__top">
          <img src="/imgs/icons/yommingo/YomingoLogo.svg" alt="Yommingo Logo" className="benefits__top__title" />
          <h2 className="benefits__top__subtitle">Why choose us?</h2>
        </div>
        <div className="benefits__cards">
          <div className="benefits__cards__card">
            <img src="/imgs/img/yommingo/card1.png
            " alt="" className="benefits__cards__card__icon" />
            <h3 className="benefits__cards__card__title">Wide range of products</h3>
          </div>
          <div className="benefits__cards__card">
            <img src="/imgs/img/yommingo/card2.png" alt="" className="benefits__cards__card__icon" />
            <h3 className="benefits__cards__card__title">Wide range of products</h3>
          </div>
          <div className="benefits__cards__card">
            <img src="/imgs/img/yommingo/card3.png" alt="" className="benefits__cards__card__icon" />
            <h3 className="benefits__cards__card__title">Wide range of products</h3>
          </div>
        </div>
      </section>

      <section className="main__catalog">
        <Slider />
      </section>

      <section className="popular">
        <h2 className="popular__title">Popular categories</h2>

        <div className="popular__grid">
          <Link to="/categories/vegetables"><img src="/imgs/img/yommingo/vg.png" alt="Vegetables" className="popular__grid__img" /></Link>
          <Link to="/categories/fruits"><img src="/imgs/img/yommingo/fb.png" alt="Fruits" className="popular__grid__img" /></Link>
          <Link to="/categories/dairy"><img src="/imgs/img/yommingo/dp.png" alt="Dairy" className="popular__grid__img" /></Link>
          <Link to="/categories/meat"><img src="/imgs/img/yommingo/mf.png" alt="Meat" className="popular__grid__img" /></Link>
          <Link to="/categories/grocery"><img src="/imgs/img/yommingo/gs.png" alt="Grocery" className="popular__grid__img" /></Link>
          <Link to="/categories/Snacks"><img src="/imgs/img/yommingo/ss.png" alt="Snacks" className="popular__grid__img" /></Link>
          <Link to="/categories/Drinks"><img src="/imgs/img/yommingo/d.png" alt="Drinks" className="popular__grid__img" /></Link>
        </div>
      </section>

      <section className="new">
        <div className="new__block">
          <h2 className="new__block__title">New</h2>
          <button className="new__block__button">See more</button>
        </div>

        <div className="new__cards">
          <CardList cards={newProducts} limit={limit}/>
        </div>
      </section>

      <section className="fou">
        <div className="new__block">
          <h2 className="new__block__title">For you</h2>
          <button className="new__block__button">See more</button>
        </div>

        <div className="new__cards">
          <CardList cards={forYou} limit={limit * 2}/>
        </div>
      </section>

      <Footer />
    </section>
  );
}