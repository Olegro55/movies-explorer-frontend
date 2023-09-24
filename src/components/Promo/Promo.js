import "./Promo.css";
import logoPath from '../../images/landing-logo.svg';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo__container">
        <img className="promo__logo" src={logoPath} alt="Логотип" />
        <h1 className="promo__title"> Учебный проект студента факультета Веб&#8209;разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
      </div>
      <a className="promo__link" href="#about-project">Узнать больше</a>
    </section>
  );
};

export default Promo;
