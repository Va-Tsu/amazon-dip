import { Link } from "react-router-dom";

export function Footer () {

  return (
    <footer className="footer Ypc__footer">
      <div className="footer__nav">
        <div className="left">
          <h3 className="left__title">
            Yommingo
          </h3>
          <p className="left__text">
            Premium imported food from all over the world.
          </p>
          <div className="left__input">
            <p className="left__input__text">
              Get exclusive deals and new arrivals.
            </p>
            <input type="text" className="left__button" placeholder="Email.."/>
          </div>
        </div>
        <div className="right">
          <div className="right__card">
            <h3 className="right__card__title">Marketplace</h3>
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

          <div className="right__card">
            <h4 className="right__card__title">Social</h4>
            <div className="social__block">
              <a href="#" className="social__link"><img src="/imgs/icons/yommingo/face.svg" alt="" className="social__link__img" /></a>
              <a href="#" className="social__link"><img src="/imgs/icons/yommingo/inst.svg" alt="" className="social__link__img" /></a>
              <a href="#" className="social__link"><img src="/imgs/icons/yommingo/tick.svg" alt="" className="social__link__img" /></a>
              <a href="#" className="social__link"><img src="/imgs/icons/yommingo/tel.svg" alt="" className="social__link__img" /></a>
              <a href="#" className="social__link"><img src="/imgs/icons/yommingo/you.svg" alt="" className="social__link__img" /></a>
            </div>
          </div>

        </div>
      </div>

      <div className="footer__law">
        © 2025 YourBrand. All rights reserved.
      </div>
    </footer>
  );
};