import { Link } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";

export function RegisterSellerAccount() {
  return (
    <section className="sellreg">
      <Header/>
      <section className="sellreg__content">
        <p className="sellreg__breadcrumb">
          <Link className="sellreg__breadcrumb__link" to={'/'}>Home</Link> / <Link className="sellreg__breadcrumb__link" to={'/user'}>User</Link> / <Link className="sellreg__breadcrumb__link" to={'/regsellacc'}>Create seller account</Link>
        </p>

        <h1 className="sellreg__title">Seller Account</h1>
        <p className="sellreg__subtitle">Sell your product in one click</p>

        <section className="sellreg__block">
          <form className="sellreg__form">

            <div className="sellreg__form__userinfo">
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input className="sellreg__field__input" type="text" placeholder="Enter your full name" />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Email</h3>
                <input className="sellreg__field__input" type="email" placeholder="you@email.com" />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Password</h3>
                <input className="sellreg__field__input" type="text" placeholder="Minimum 8 characters" />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Confirm Password</h3>
                <input className="sellreg__field__input" type="text" placeholder="Re-enter your password" />
              </div>
            </div>

            <div className="sellreg__form__business">
              <h2 className="sellreg__form__business__title">Business Information</h2>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input className="sellreg__field__input" type="text" placeholder="Enter your full name" />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input className="sellreg__field__input" type="text" placeholder="Enter your full name" />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input className="sellreg__field__input" type="text" placeholder="Enter your full name" />
              </div>
              <div className="sellreg__field__checkbox">
                <input 
                  type="checkbox" 
                  id="terms" 
                  className="sellreg__field__checkbox__input"
                />
                <label htmlFor="terms" className="sellreg__field__checkbox__label">
                  I agree to the <Link to="/terms" className="sellreg__field__checkbox__link">Terms and Conditions</Link>
                </label>
              </div>
            </div>
            <div className="sellreg__form__submit">
              <button className="sellreg__form__submit__button">Create Seller Account</button>
            </div>

            <p className="sellreg__form__login">
              Already have a seller account? <Link className="sellreg__form__login__link" to={'./'}>Log in</Link>
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