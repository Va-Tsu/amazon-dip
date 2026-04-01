import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { useState } from "react";
import type { RegisterSellerRequest } from "../../../types/auth";
import { registerSeller } from "../../../api/auths";

export function RegisterSellerAccount() {
  const navigate = useNavigate();
  const [regSeller, setRegSeller] = useState<RegisterSellerRequest>({
    fullName: '',
    email: '',
    password: '',
    confirmedPassword: '',
    storeName: '',
    country: '',
    phoneNumber: '',
    agreed: false,
  });

  const updateRegSeller = (fields: Partial<RegisterSellerRequest>) => {
    setRegSeller(prev => ({ ...prev, ...fields }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regSeller.agreed) return alert('Please agree to Terms');

    try {
      const token = localStorage.getItem('token') ?? '';
      await registerSeller(regSeller, token);
      navigate('/user/selleracc');
    } catch (e) {
      alert((e as Error).message);
    }
    console.log(regSeller)
  };

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
          <form className="sellreg__form" onSubmit={handleSubmit}>

            <div className="sellreg__form__userinfo">
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input 
                  className="sellreg__field__input" 
                  type="text" 
                  placeholder="Enter your full name"
                  value={regSeller.fullName}
                  onChange={(e) => updateRegSeller({ fullName: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Email</h3>
                <input
                  className="sellreg__field__input"
                  type="email"
                  placeholder="you@email.com"
                  value={regSeller.email}
                  onChange={(e) => updateRegSeller({ email: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Password</h3>
                <input
                  className="sellreg__field__input"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={regSeller.password}
                  onChange={(e) => updateRegSeller({ password: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Confirm Password</h3>
                <input
                  className="sellreg__field__input"
                  type="password"
                  placeholder="Re-enter your password"
                  value={regSeller.confirmedPassword}
                  onChange={(e) => updateRegSeller({ confirmedPassword: e.target.value })}
                />
              </div>
            </div>

            <div className="sellreg__form__business">
              <h2 className="sellreg__form__business__title">Business Information</h2>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Store Name</h3>
                <input
                  className="sellreg__field__input"
                  type="text"
                  placeholder="Enter your store name"
                  value={regSeller.storeName}
                  onChange={(e) => updateRegSeller({ storeName: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Country</h3>
                <input
                  className="sellreg__field__input"
                  type="text"
                  placeholder="Enter your country"
                  value={regSeller.country}
                  onChange={(e) => updateRegSeller({ country: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Phone</h3>
                <input
                  className="sellreg__field__input"
                  type="text"
                  placeholder="Enter your phone"
                  value={regSeller.phoneNumber}
                  onChange={(e) => updateRegSeller({ phoneNumber: e.target.value })}
                />
              </div>
              <div className="sellreg__field__checkbox">
                <input
                  type="checkbox"
                  id="terms"
                  className="sellreg__field__checkbox__input"
                  checked={regSeller.agreed}
                  onChange={(e) => updateRegSeller({ agreed: e.target.checked })}
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