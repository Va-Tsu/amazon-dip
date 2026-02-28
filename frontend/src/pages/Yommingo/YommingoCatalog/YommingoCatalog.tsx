import { useParams } from "react-router-dom";
import { Header } from "../../../assets/Header";
import { CardList } from "../../../assets/CardList";
import { mockCards } from "../../../types/testData";
import { Footer } from "../../../assets/Footer";

const mockCategory = {
  vegetables: {
    title: 'Vegetables and greens',
    imgUrl: '/imgs/img/yommingo/vg.png',
  },
  fruits: {
    title: 'Fruits and berries',
    imgUrl: '/imgs/img/yommingo/fb.png',
  },
  dairy: {
    title: 'Dairy products',
    imgUrl: '/imgs/img/yommingo/dp.png',
  },
  Meat: {
    title: 'Meat and fish',
    imgUrl: '/imgs/img/yommingo/mf.png',
  },
  grocery: {
    title: 'Grocery store',
    imgUrl: '/imgs/img/yommingo/gs.png',
    Category: 'Grocery',
  },
  Snacks: {
    title: 'Snacks and sweets',
    imgUrl: '/imgs/img/yommingo/ss.png',
  },
  Drinks: {
    title: 'Drinks',
    imgUrl: '/imgs/img/yommingo/d.png',
  },
};

export function YommingoCatalog() {
  const { category } = useParams();
  const data = mockCategory[category as keyof typeof mockCategory];
  return (
    <section className="catalog">
      <Header/>
        <section className="catalog__content">
          <section className="catalog__pres">
            <h1 className="catalog__pres__title">{data.title}</h1>
            <img className="catalog__pres__img" src={data.imgUrl} alt="img" />
          </section>
          <section className="catalog__aside__disc">
            <aside className="catalog__aside catalog__aside__onDesktop">
              <p className="catalog__aside__nav">
                Home / {data.title}
              </p>

              <div className="catalog__aside__card">
                <h2 className="catalog__aside__card__title">
                  Categories
                </h2>
                <button className="catalog__aside__card__button"><img src="/imgs/icons/catalog/arrowR.svg" alt="" /></button>
              </div>
              <div className="catalog__aside__card">
                <h2 className="catalog__aside__card__title">
                  Categories
                </h2>
                <button className="catalog__aside__card__button"><img src="/imgs/icons/catalog/arrowR.svg" alt="" /></button>
              </div>
              <div className="catalog__aside__card">
                <h2 className="catalog__aside__card__title">
                  Categories
                </h2>
                <button className="catalog__aside__card__button"><img src="/imgs/icons/catalog/arrowR.svg" alt="" /></button>
              </div>
            </aside>

            <aside className="catalog__aside catalog__aside__onMobile">
              <p className="catalog__aside__nav">
                Home / {category}
              </p>

              <div className="catalog__aside__card">
                <h2 className="catalog__aside__card__title">
                  Categories
                </h2>
              </div>
            </aside>

            <section className="catalog__discounts">
              <h1 className="catalog__discounts__title" id="catalog__title">
                Discounts
              </h1>
              <div className="catalog__discounts__list">
                <CardList cards={mockCards} limit={5}/>
              </div>
            </section>
          </section>

          <section className="catalog__main">
            <h1 className="catalog__main__title" id="catalog__title">{category}</h1>

            <CardList cards={mockCards} limit={5}/>
          </section>
        </section>
      <Footer/>
    </section>
  );
}