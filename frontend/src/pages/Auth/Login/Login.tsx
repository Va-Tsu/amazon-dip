//#region Imports
import React, { useState } from "react";
import { Divider } from "../../../assets/Divider";
import { Logo } from "../../../assets/Logo";
import { SocialLinks } from "../../../assets/SocialLinks";
import { login } from "../../../api/auth";
import classNames from "classnames";

//#endregion

export function Login() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: React.FormEvent) => {
      event.preventDefault();
      try {
        const result = await login ({email, password});
        localStorage.setItem('token', result.token);
      } catch (e) {
        setError((e as Error).message);
      }
    }
  return (
    <section className="login auth">
      <div className="login__container auth__container">
        {/* Header/Title block */}
        <div className="login__header auth__header">
          <Logo />
          <h2 className="login__title auth__title">Log In</h2>
        </div>
        
        <p className="login__subtitle auth__subtitle">Log in your account</p>
        
        {/* Form block */}
        <form className="login__form auth__form" onSubmit={handleSubmit}>
          <input
            className={classNames("login__input auth__input auth-button", { 'auth-error': error === 'emailError' })} // Test classes
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="login__input-wrapper auth__input-wrapper">
            <input
              className="login__input auth__input auth-button"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button 
              type="button" 
              className="login__password-toggle auth__password-toggle"
              aria-label="Toggle password visibility"
              hidden={true}
            >
              Show
            </button>
          </div>

          <button className="login__button auth__button auth-button" type="submit">
            Log in
          </button>
        </form>

        {/* Footer link */}
        <p className="login__footer auth__footer">
          New here?
          <a href="/register" className="login__link auth__link"> Sign up</a>
        </p>

        {/* Divider */}
        <Divider />

        {/* Social links */}
        <SocialLinks />
      </div>
    </section>
  );
}
