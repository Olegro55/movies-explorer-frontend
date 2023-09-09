import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__links">
        <a className="footer__link" href="">Яндекс.Практикум</a>
        <a className="footer__link" href="">Github</a>
      </div>
      <p className="footer__copyright">© 2023</p>
    </footer>
  );
};

export default Footer;
