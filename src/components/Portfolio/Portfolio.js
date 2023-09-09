import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <a className="portfolio__link" href="">Статичный сайт</a>
      <a className="portfolio__link" href="">Адаптивный сайт</a>
      <a className="portfolio__link" href=""> Одностраничное приложение</a>
    </div>
  );
};

export default Portfolio;
