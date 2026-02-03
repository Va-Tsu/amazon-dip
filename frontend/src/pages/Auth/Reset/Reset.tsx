//#region Imports
import { Logo } from "../../../assets/Logo";

//#endregion

export function Reset() {
  return (
    <section className="reset auth">
      <div className="reset__header auth__header">
        <Logo />
        <h2 className="reset__title auth__title">Reset your password</h2>
        <p className="reset__subtitle">Enter your email address and we’ll send you a link to reset your password.</p>
      </div>
      <form className="reset__form auth__form">
        <input
          className="reset__input auth__input auth-button"
          type="email"
          placeholder="Email"
          required
        />
        <button type="submit" className="reset__submit auth-button">Send reset link</button>
      </form>
    </section>
  );
}