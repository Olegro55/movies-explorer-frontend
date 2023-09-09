import "./Techs.css";

const Techs = () => {
  return (
    <div className="tech">
      <p className="tech__title">7 технологий</p>
      <p className="tech__text">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>

      <div className="tech__items">
        <div className="tech__item">HTML</div>
        <div className="tech__item">CSS</div>
        <div className="tech__item">JS</div>
        <div className="tech__item">React</div>
        <div className="tech__item">Git</div>
        <div className="tech__item">Express.js</div>
        <div className="tech__item">mongoDB</div>
      </div>
    </div>
  );
};

export default Techs;
