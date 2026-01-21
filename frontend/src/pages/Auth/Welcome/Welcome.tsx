//#region Imports
import { Divider } from "../../../assets/Divider";
import { Logo } from "../../../assets/Logo";
//#endregion

export function Welcome() {
  return (
    <section className="auth">
      {/* Header/Title block */}
      <div className="welcome__header auth__header">
        <Logo />
        <h2 className="welcome__title auth__title">Log In</h2>
      </div>

      {/* AuthBlock */}

      <div className="welcome__authblock">
        <button className="welcome__button auth-button">Creat account</button>
        <Divider />
        <button className="welcome__button auth-button">Log in</button>
      </div>
    </section>
  );
}