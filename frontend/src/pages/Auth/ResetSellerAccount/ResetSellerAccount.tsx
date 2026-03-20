import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";

export function ResetSellerAccount() {
  return (
    <section className="sellreg">
      <Header/>
      <section className="sellreg__content">
        <p className="sellreg__breadcrumb">
          <Link className="sellreg__breadcrumb__link" to={'/'}>Home</Link> / <Link className="sellreg__breadcrumb__link" to={'/user'}>User</Link> / <Link className="sellreg__breadcrumb__link" to={'/regsellacc'}>Resert your password</Link>
        </p>

        <h1 className="sellreg__title">Resert your password</h1>
        <p className="sellreg__subtitle">Welcome back!</p>

        <section className="sellreg__block">
          <form className="sellreg__form">

            <form className="sellreg__form__userinfo">
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Email</h3>
                <input className="sellreg__field__input" type="email" placeholder="you@email.com" />
              </div>
              <p className="sellreg__field__or">Or</p>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Phone Number</h3>
                <input className="sellreg__field__input" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </form>
            <div className="sellreg__form__submit">
              <button className="sellreg__form__submit__button">Send</button>
            </div>

            <p className="sellreg__form__login">
              Back to <Link className="sellreg__form__login__link" to={'../logsellacc'}> Log in</Link>
            </p>

          </form>

          <div className="sellreg__info">
            <img className="sellreg__info__img" src="/imgs/img/auth/sellerAcc/img.png" alt="" />
            <div className="sellreg__info__card">
              <img className="sellreg__info__card__img" src="/imgs/icons/auth/sellerAcc/lightning.svg" alt="" />
              <div className="sellreg__info__card__block">
                <h1 className="sellreg__info__card__title">Start Selling today</h1>
                <p className="sellreg__info__card__subtitle">Join thousands of sellers on Yommingo and reach customers worldwide.</p>
              </div>
            </div>
          </div>
        </section>
      </section>
      <Footer/>
    </section>
  );
}