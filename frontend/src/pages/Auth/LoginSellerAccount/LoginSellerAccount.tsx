import { Link, useNavigate } from "react-router-dom";
import { Footer } from "../../../assets/Footer";
import { Header } from "../../../assets/Header";
import { loginSeller } from "../../../api/auths";
import { useState } from "react";
import type { LoginSellerRequest } from "../../../types/auth";

export function LoginSellerAccount() {
  const navigate = useNavigate();

  const [logSeller, setLogSeller] = useState<LoginSellerRequest>({
    name: '',
    email: '',
    password: '',
    phone: '',
    agreed: false,
  })

  const updateLogSeller = (fields: Partial<LoginSellerRequest>) => {
    setLogSeller(prev => ({...prev, ...fields}))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try{
      await loginSeller(logSeller)
      navigate('/user/selleracc');
      console.log(logSeller)
    } catch (e) {
      alert((e as Error).message)
    }
  }

  return (
    <section className="sellreg">
      <Header/>
      <section className="sellreg__content">
        <p className="sellreg__breadcrumb">
          <Link className="sellreg__breadcrumb__link" to={'/'}>Home</Link> / <Link className="sellreg__breadcrumb__link" to={'/user'}>User</Link> / <Link className="sellreg__breadcrumb__link" to={'/regsellacc'}>Log in seller account</Link>
        </p>

        <h1 className="sellreg__title">Login In To Seller account</h1>
        <p className="sellreg__subtitle">Welcome back!</p>

        <section className="sellreg__block">
          <form className="sellreg__form" onSubmit={handleSubmit}>

            <div className="sellreg__form__userinfo">
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Full Name</h3>
                <input
                  className="sellreg__field__input"
                  type="text"
                  placeholder="Enter your full name"
                  value={logSeller.name}
                  onChange={(e) => updateLogSeller({ name: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Email</h3>
                <input
                  className="sellreg__field__input"
                  type="email"
                  placeholder="you@email.com"
                  value={logSeller.email}
                  onChange={(e) => updateLogSeller({ email: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Password</h3>
                <input
                  className="sellreg__field__input"
                  type="password"
                  placeholder="Minimum 8 characters"
                  value={logSeller.password}
                  onChange={(e) => updateLogSeller({ password: e.target.value })}
                />
              </div>
              <div className="sellreg__field">
                <h3 className="sellreg__field__label">Phone Number</h3>
                <input
                  className="sellreg__field__input"
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={logSeller.phone}
                  onChange={(e) => updateLogSeller({ phone: e.target.value })}
                />
              </div>
            </div>
            <div className="sellreg__form__submit">
              <button className="sellreg__form__submit__button">Create Seller Account</button>
            </div>

            <p className="sellreg__form__login">
              Forgot Password? <Link className="sellreg__form__login__link" to={'../resetsellacc'}> Reset your password</Link>
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