//#region Imports
import { Divider } from "../../../assets/Divider";
import { SocialLinks } from "../../../assets/SocialLinks";
import { Logo } from "../../../assets/Logo";

//#endregion

export function Register() {
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
        <form className="register__form auth__form">
          <input
            className="register__input auth__input auth-button"
            type="text"
            placeholder="Full name"
            required
          />
          <input
            className="register__input auth__input auth-button"
            type="email"
            placeholder="Email"
            required
          />
          <div className="register__input-wrapper auth__input-wrapper">
            <input
              className="register__input auth__input auth-button"
              type="password"
              placeholder="Password"
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