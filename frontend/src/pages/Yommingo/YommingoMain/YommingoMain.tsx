//#region Imports
//#endregion

import { Link } from "react-router-dom";

export function YommingoMain() {
  return (
    <section className="yommingo">
      <header className=" header">
        <img src="/imgs/icons/yommingo/YomingoLogo.svg" alt="Yommingo Logo" className="header__logo" />
        <div className="header__input">
          <img src="/imgs/icons/yommingo/search-normal.svg" alt="Search Icon" className="header__input-icon" />
          <input type="text" className="header__input__search" placeholder="Search..." />
        </div>
        <div className="header__nav">
          <Link to="/yommingo/auth/login" className="header__nav__account"><img src="/imgs/icons/yommingo/account.svg" alt="User Account" /></Link>
          <nav className="header__nav__burger"><img src="/imgs/icons/yommingo/nav.svg" alt="" /></nav>
        </div>
      </header>

      <section className="mainpage">
        <h1 className="mainpage__title">Your best choice of products from around the world</h1>
        <div className="mainpage__buttons">
          <button onClick={() => window.location.href = "/yommingo/auth/register"} className="mainpage__buttons__button">Registration</button>
          <button className="mainpage__buttons__button">Buy now</button>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits__top">
          <h2 className="benefits__top__title">Logo</h2>
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

      <section className="catalog">
      </section>

      <section className="popular">
        <h2 className="popular__title">Popular categories</h2>

        <div className="popular__grid">
          <Link to="/yommingo/categories/vegetables"><img src="/imgs/img/yommingo/vg.png" alt="Vegetables" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/fruits"><img src="/imgs/img/yommingo/fb.png" alt="Fruits" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/dairy"><img src="/imgs/img/yommingo/dp.png" alt="Dairy" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/meat"><img src="/imgs/img/yommingo/mf.png" alt="Meat" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/grocery"><img src="/imgs/img/yommingo/gs.png" alt="Grocery" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/Snacks"><img src="/imgs/img/yommingo/ss.png" alt="Snacks" className="popular__grid__img" /></Link>
          <Link to="/yommingo/categories/Drinks"><img src="/imgs/img/yommingo/d.png" alt="Drinks" className="popular__grid__img" /></Link>
        </div>
      </section>

      <section className="new">
        <div className="new__block">
          <h2 className="new__block__title">New</h2>
          <button className="new__block__button">See more</button>
        </div>

        <div className="new__cards">
          <div className="new__card">
            <img src="/imgs/img/yommingo/card2.png" alt="" className="new__card__img" />
            <div className="new__card__content">
              <h3 className="new__card__price">99.9 USD</h3>
              <span className="new__card__span"></span>
              <h3 className="new__card__name">Name</h3>
              <h3 className="new__card__brand">Brand</h3>
              <div className="new__card__footer">
                <h3 className="new__card__weight">120g</h3>
                <button className="new__card__button">Buy</button>
              </div>
            </div>
          </div>

          <div className="new__card">
            <img src="/imgs/img/yommingo/card2.png" alt="" className="new__card__img" />
            <div className="new__card__content">
              <h3 className="new__card__price">99.9 USD</h3>
              <span className="new__card__span"></span>
              <h3 className="new__card__name">Name</h3>
              <h3 className="new__card__brand">Brand</h3>
              <div className="new__card__footer">
                <h3 className="new__card__weight">120g</h3>
                <button className="new__card__button">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fou">
        <div className="new__block">
          <h2 className="new__block__title">For you</h2>
          <button className="new__block__button">See more</button>
        </div>

        <div className="new__cards">
          <div className="new__card">
            <img src="/imgs/img/yommingo/card2.png" alt="" className="new__card__img" />
            <div className="new__card__content">
              <h3 className="new__card__price">99.9 USD</h3>
              <span className="new__card__span"></span>
              <h3 className="new__card__name">Name</h3>
              <h3 className="new__card__brand">Brand</h3>
              <div className="new__card__footer">
                <h3 className="new__card__weight">120g</h3>
                <button className="new__card__button">Buy</button>
              </div>
            </div>
          </div>

          <div className="new__card">
            <img src="/imgs/img/yommingo/card2.png" alt="" className="new__card__img" />
            <div className="new__card__content">
              <h3 className="new__card__price">99.9 USD</h3>
              <span className="new__card__span"></span>
              <h3 className="new__card__name">Name</h3>
              <h3 className="new__card__brand">Brand</h3>
              <div className="new__card__footer">
                <h3 className="new__card__weight">120g</h3>
                <button className="new__card__button">Buy</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
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
      </section>
    </section>
  );
}