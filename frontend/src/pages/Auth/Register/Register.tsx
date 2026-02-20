//#region Imports
import { Divider } from "../../../assets/Divider";
import { SocialLinks } from "../../../assets/SocialLinks";
import { Logo } from "../../../assets/Logo";
import { useState } from "react";
import { register } from "../../../api/auth";
import classNames from 'classnames';

//#endregion

export function Register() {

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const result = await register ({email, password, fullName: name});
      localStorage.setItem('token', result.token);
    } catch (e) {
      setError((e as Error).message);
    }
  }

  return (
    <section className="register auth">
      <div className="register__container auth__container">
        {/* Header/Title block */}
        <div className="register__header auth__header">
          <Logo />
          <h2 className="register__title auth__title">Sign Up</h2>
        </div>
        
        <p className="register__subtitle auth__subtitle">Create your account in second</p>
        
        {/* Form block */}
        <form className="register__form auth__form" onSubmit={handleSubmit}>
          <input
            className="register__input auth__input auth-button"
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
          <input
            className={classNames("register__input auth__input auth-button", { 'auth-error': error === 'emailError' })} // Test classes
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <div className="register__input-wrapper auth__input-wrapper">
            <input
              className="register__input auth__input auth-button"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />
            <button 
              type="button" 
              className="register__password-toggle auth__password-toggle"
              aria-label="Toggle password visibility"
              hidden={true}
            >
              Show
            </button>
          </div>
          
          {/* Checkbox block */}
          <label className="register__checkbox auth__checkbox">
            <input 
              type="checkbox" 
              className="register__checkbox-input auth__checkbox-input" 
              required 
            />
            <span className="register__checkbox-text auth__checkbox-text">
              I agree to the Terms of Services and privacy policy
            </span>
          </label>
          
          <button className="register__button auth-button" type="submit">
            Create an account
          </button>
        </form>

        {/* Footer link */}
        <p className="register__footer auth__footer">
          Already a member? 
          <a href="/login" className="register__link auth__link"> Log in</a>
        </p>

        {/* Divider */}
        <Divider />

        {/* Social links */}
        <SocialLinks />
      </div>
    </section>
  );
}