import { useState } from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../../types/product"; // путь к твоим типам

const mockProduct: Product = {
  id: 1,
  title: "LINDOR PINK LIMITED EDITION",
  description:
    "Indulge in the elegance of Lindt LINDOR Pink Limited Edition — a refined selection of irresistibly smooth chocolate truffles with a delicate, creamy center. Crafted by Lindt Master Chocolatiers, this limited edition combines exquisite flavors and a soft melting texture for a truly luxurious experience.",
  photoUrl: "/imgs/img/yommingo/productTest.png",
  price: 12.9,
  category: "Snacks and sweets",
  details: "Experience the perfect balance of rich chocolate and a luscious filling with Lindt LINDOR Pink Limited Edition. Each truffle is a masterpiece of craftsmanship, designed to melt in your mouth and deliver an unforgettable taste sensation. Whether you're treating yourself or sharing with loved ones, these limited edition truffles are the ultimate indulgence for chocolate connoisseurs.",
  information: [
    { label: "Weight", value: "200g" },
    { label: "Category", value: "Snacks and sweets" },
    { label: "Ingredients", value: "Milk chocolate, cacao butter, sugar, hazelnuts" },
    { label: "SKU", value: "LIN-PINK-200" },
    { label: "Country of origin", value: "Germany" },
    { label: "Storage", value: "Store in a cool, dry place" },
    { label: "Expiration date", value: "12 months" },
    { label: "Availability", value: "In stock" },
  ],
  comments: [
    {
      id: 1,
      userId: 101,
      userName: "Anna K.",
      content: "Absolutely delicious! Great gift idea.",
      rating: 5,
      date: "2024-03-15T10:30:00Z",
    },
    {
      id: 2,
      userId: 102,
      userName: "Max P.",
      content: "Good chocolate but a bit sweet for me.",
      rating: 4,
      date: "2024-03-10T08:00:00Z",
    },
  ],
};



export function YommingoProductCard() {
  const [product] = useState<Product>(mockProduct);

  return (
    <section className="Ypc">
      <header className=" header header__Ypc">
        <img src="/imgs/icons/yommingo/YomingoLogo.svg" alt="Yommingo Logo" className="header__logo" />
        <div className="header__input">
          <img src="/imgs/icons/yommingo/search-normal.svg" alt="Search Icon" className="header__input-icon" />
          <input type="text" className="header__input__search" placeholder="Search..." />
        </div>
        <div className="header__nav">
          <Link to="/yommingo/auth/login" className="header__nav__account"><img src="/imgs/icons/yommingo/account.svg" alt="User Account" /></Link>
          <nav className="header__nav__burger">
            <img className="header__nav__onmobile" src="/imgs/icons/yommingo/nav.svg" alt="" />
            <div className="header__nav__ondesktop">
            <Link to="#" className="header__nav__ondesktop__item">About us</Link>
            <Link to="#" className="header__nav__ondesktop__item">Client type</Link>
            <Link to="#" className="header__nav__ondesktop__item">Support</Link>
            <Link to="#" className="header__nav__ondesktop__item">Catalog</Link>
            </div>
          </nav>
        </div>
      </header>
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

      <footer className="footer Ypc__footer">
        <div className="footer__nav">
          <div className="left">
            <h3 className="left__title">
              Yommingo
            </h3>
            <p className="left__text">
              Premium imported food from all over the world.
            </p>
            <p className="left__text">
              Get exclusive deals and new arrivals.
            </p>
            <input type="text" className="left__button" placeholder="Email.."/>
          </div>
          <div className="right">
            <div className="right__card">
              <h3 className="right__card__title">Contact us</h3>
              <Link to={'#'} className="right__card__link">Popular Categories</Link>
              <Link to={'#'} className="right__card__link">World Catalog</Link>
              <Link to={'#'} className="right__card__link">For You</Link>
              <Link to={'#'} className="right__card__link">New</Link>
            </div>
            
            <div className="right__card">
              <h3 className="right__card__title">Company</h3>
              <Link to={'#'} className="right__card__link">Contact Us</Link>
              <Link to={'#'} className="right__card__link">About Us</Link>
              <Link to={'#'} className="right__card__link">Partners</Link>
            </div>

            <div className="right__card">
              <h3 className="right__card__title">Support</h3>
              <Link to={'#'} className="right__card__link">Shoping & Delivery</Link>
              <Link to={'#'} className="right__card__link">Returns & Refunds</Link>
              <Link to={'#'} className="right__card__link">Pricacy policy</Link>
            </div>

          </div>
        </div>

        <div className="footer__social">

          <div className="social__block">
            <h4 className="social__title">Social</h4>
            <a href="#" className="social__link"><img src="/imgs/icons/yommingo/face.svg" alt="" className="social__link__img" /></a>
            <a href="#" className="social__link"><img src="/imgs/icons/yommingo/inst.svg" alt="" className="social__link__img" /></a>
            <a href="#" className="social__link"><img src="/imgs/icons/yommingo/tick.svg" alt="" className="social__link__img" /></a>
            <a href="#" className="social__link"><img src="/imgs/icons/yommingo/tel.svg" alt="" className="social__link__img" /></a>
            <a href="#" className="social__link"><img src="/imgs/icons/yommingo/you.svg" alt="" className="social__link__img" /></a>
          </div>
        </div>
      </footer>
    </section>
  );
}
