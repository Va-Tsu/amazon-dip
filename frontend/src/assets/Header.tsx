import { Link, useNavigate } from "react-router-dom";

export function Header () {
  const navigate = useNavigate();
  return (
    <header className="header">
      <img src="/imgs/icons/yommingo/YomingoLogo.svg" alt="Yommingo Logo" className="header__logo" onClick={() => navigate(`/`)}/>
      <div className="header__input">
        <img src="/imgs/icons/yommingo/search-normal.svg" alt="Search Icon" className="header__input-icon" />
        <input type="text" className="header__input__search" placeholder="Search..." />
      </div>
      <div className="header__nav">
        <Link to="/yommingo/auth/login" className="header__nav__account"><img src="/imgs/icons/yommingo/account.svg" alt="User Account" /></Link>
        <nav className="header__nav__burger">
          <img className="header__nav__onmobile" src="/imgs/icons/yommingo/nav.svg" alt="" />
          <div className="header__nav__ondesktop">
          <Link to="/about" className="header__nav__ondesktop__item">About us</Link>
          <Link to="#" className="header__nav__ondesktop__item">Backet</Link>
          <Link to="#" className="header__nav__ondesktop__item">Support</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};