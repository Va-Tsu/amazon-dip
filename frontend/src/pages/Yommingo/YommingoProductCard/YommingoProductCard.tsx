import { useParams } from "react-router-dom";

import { mockProducts } from "../../../types/testData"
import { Footer } from "../../../assets/footer";
import { Header } from "../../../assets/Header";


export function YommingoProductCard() {
  const { id } = useParams();
  const product = mockProducts.find(p => p.id === Number(id));

  if (!product) return <h1>Product not found</h1>;

  return (
    <section className="Ypc">
      <Header />
      <div className="Ypc__route">

      </div>
      <main className="Ypc__main">
        <section className="Ypc__productCard">
          <section className="Ypc__productCard__topInfo">
            <img src={product.photoUrl} alt={product.title} className="Ypc__productCard__topInfo__img" />
            <div className="Ypc__productCard__topInfo__text">
              <h1 className="Ypc__productCard__topInfo__text__title">{product.title}</h1>
              <p className="Ypc__productCard__topInfo__text__description">{product.description}</p>
            </div>
          </section>
          <p className="Ypc__productCard__price">${product.price.toFixed(2)}</p>
          <section className="Ypc__productCard__downInfo">
            <div className="Ypc__productCard__downInfo__sertificate">
              <a href="" className="Ypc__productCard__downInfo__sertificate__title">Wholesale / Retail</a>
              <a href="" className="Ypc__productCard__downInfo__sertificate__title">Certificates</a>
            </div>
            <form className="Ypc__productCard__downInfo__form">
              <div className="Ypc__productCard__downInfo__counter">
                <button className="Ypc__productCard__downInfo__counter__btn empty__style">+</button>
                <div className="Ypc__productCard__downInfo__counter__value empty__style">1</div>
                <button className="Ypc__productCard__downInfo__counter__btn empty__style">-</button>
              </div>
              <button className="Ypc__productCard__downInfo__addButton">Buy</button>
            </form>
          </section>
          <section className="Ypc__productCard__information">
            <h2 className="Ypc__productCard__information__title">Product information</h2>
            <ul className="Ypc__productCard__information__list">
              {product.information?.map((item, index) => (
                <li key={index} className="Ypc__productCard__information__list__item">
                  <span className="Ypc__productCard__information__list__item__label">{item.label}</span>
                  <span className="Ypc__productCard__information__list__item__value">{item.value}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="Ypc__productCard__details">
            <h2 className="Ypc__productCard__details__title">Product details</h2>
            <p className="Ypc__productCard__details__description">{product.details}</p>
          </section>

        </section>

        <section className="Ypc__productCard__comments">
          <h2 className="Ypc__productCard__comments__title">Comments</h2>
          {product.comments?.map((comment) => (
            <div key={comment.id} className="Ypc__productCard__comments__comment">
              <span className="Ypc__productCard__comments__comment__username">{comment.userName}</span>
              <p className="Ypc__productCard__comments__comment__content">{comment.content}</p>
              <span className="Ypc__productCard__comments__comment__header__rating">{'⭐'.repeat(comment.rating)}</span>
              <span className="Ypc__productCard__comments__comment__date">{new Date(comment.date).toLocaleDateString()}</span>
            </div>
          ))}

          <div className="Ypc__productCard__comments__add">
            <h3 className="Ypc__productCard__comments__add__title">Add comment</h3>
            <input className="Ypc__productCard__comments__add__input" type="text" placeholder="Text" />
          </div>
        </section>
      </main>

      <Footer />
    </section>
  );
}
