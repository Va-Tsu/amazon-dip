import { useParams } from "react-router-dom";
import { Header } from "../../../assets/Header";
import { CardList } from "../../../assets/CardList";
import { mockCards } from "../../../types/testData";
import { Footer } from "../../../assets/Footer";

const mockCountry = {
  italy: {
    title: 'Italy',
    imgUrl: '/imgs/icons/catalog/it.png',
  },
  japan: {
    title: 'Japan',
    imgUrl: '/imgs/icons/catalog/jp.png',
  },
  spain: {
    title: 'Spain',
    imgUrl: '/imgs/icons/catalog/sp.png',
  },
  germany: {
    title: 'Germany',
    imgUrl: '/imgs/icons/catalog/ge.png',
  },
  france: {
    title: 'France',
    imgUrl: '/imgs/icons/catalog/fr.png',
  },
};

export function YommingoCountries() {
  const { country } = useParams();
  const data = mockCountry[country as keyof typeof mockCountry];

  if (!data) {
    return <h1>Country not found</h1>
  }
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
                Home / {country}
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
            <h1 className="catalog__main__title" id="catalog__title">Products</h1>

            <CardList cards={mockCards} limit={5}/>
          </section>
        </section>
      <Footer/>
    </section>
  );
}