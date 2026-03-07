/* eslint-disable @typescript-eslint/no-unused-vars */
import { CardList } from "../../../assets/CardList";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { useSearchParams } from "react-router-dom";
import { mockCards } from "../../../types/testData";

export function YommingoSearch () {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') ?? '';

  const results = mockCards.filter(card =>
    card.title.toLowerCase().includes(query.toLowerCase()) ||
    card.brand.toLowerCase().includes(query.toLowerCase())
  );

  console.log('query:', query);
  console.log('mockCards:', mockCards);
  console.log('results:', results);

  return (
    <section className="search">
      <Header />
      <section className="search__content">
        <div className="search__text">
          <h1 className="search__text__title">On request: {query}</h1>
          <p className="search__text__subtitle">Products found:</p>
        </div>

        <div className="search__filter"></div>
        <CardList cards={results}/>
      </section>



      <Footer />
    </section>
  );
};