import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <p className="portfolio__title">Портфолио</p>
      <a className="portfolio__link" target="_blank" href="https://olegro55.github.io/russian-travel/index.html">Статичный сайт</a>
      <a className="portfolio__link" target="_blank" href="https://github.com/Olegro55/mesto">Адаптивный сайт</a>
      <a className="portfolio__link" target="_blank" href="https://github.com/Olegro55/mesto-react"> Одностраничное приложение</a>
    </div>
  );
};

export default Portfolio;
