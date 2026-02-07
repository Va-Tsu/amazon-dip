//#region Imports
import '../styles/components/social.scss';
//#endregion

export function SocialLinks() {
  return (
    <div className="social">
      <a href="https://github.com/Va-Tsu/amazon-dip" className="social__link">
        <img src="/imgs/icons/apple.svg" alt="" className="social__icon" />
      </a>
      <a href="https://google.com" className="social__link">
        <img src="/imgs/icons/google.svg" alt="" className="social__icon" />
      </a>
      <a href="https://twitter.com" className="social__link">
        <img src="/imgs/icons/twitter.svg" alt="" className="social__icon" />
      </a>
      <a href="https://facebook.com" className="social__link">
        <img src="/imgs/icons/Facebook.svg" alt="" className="social__icon" />
      </a>
    </div>
  );
}