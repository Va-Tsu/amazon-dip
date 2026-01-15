export function Register() {
  return (
    <section className="register">
      {/* Header/Title block */}
      <div className="register__header">
        <h1 className="register__logo">Yommingo</h1> {/*  // could be a separate component */}
        <h2 className="register__title">Sign Up</h2>
      </div>
      
      <p className="register__subtitle">Create your account in second</p>
      
      {/* Form block */}
      <form className="register__form">
        <input
          className="register__input"
          type="text"
          placeholder="Full name"
          required
        />
        <input
          className="register__input"
          type="email"
          placeholder="Email"
          required
        />
        <div className="register__input-wrapper">
          <input
            className="register__input"
            type="password"
            placeholder="Password"
            required
          />
          <button 
            type="button" 
            className="register__password-toggle"
            aria-label="Toggle password visibility"
          >
            Show
          </button>
        </div>
        
        {/* Checkbox block */}
        <label className="register__checkbox">
          <input 
            type="checkbox" 
            className="register__checkbox-input" 
            required 
          />
          <span className="register__checkbox-text">
            I agree to the Terms of Services and privacy policy
          </span>
        </label>
        
        <button className="register__button" type="submit">
          Create an account
        </button>
      </form>

      {/* Footer link */}
      <p className="register__footer">
        Already a member? 
        <a href="/login" className="register__link">Log in</a>
      </p>

      {/* Divider */ }
      <div className="register__divider">
        <span className="register__divider-text">or</span> {/*  // could be a separate component */}
      </div>

      {/* Social links */}
      <div className="register__socials">
        <button className="register__social-button register__social-button--github">
          GitHub
        </button>
        <button className="register__social-button register__social-button--google">
          Google
        </button>
        <button className="register__social-button register__social-button--twitter">
          Twitter
        </button>
        <button className="register__social-button register__social-button--facebook">
          Facebook
        </button>
      </div>
    </section>
  );
}