import { useLocation } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const location = useLocation().pathname;

  return (location === '/' || location === '/saved-movies' || location === '/movies') &&
    (
      <footer className="footer">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__links">
          <a className="footer__link" target="_blank" href="https://practicum.yandex.ru/">Яндекс.Практикум</a>
          <a className="footer__link" target="_blank" href="https://github.com/Olegro55">Github</a>
        </div>
        <p className="footer__copyright">©2023</p>
      </footer>
    );
};

export default Footer;
