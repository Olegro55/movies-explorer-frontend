import "./AboutProject.css";

const AboutProject = () => {
  return (
    <>
      <div className="about-project__info">
        <div className="about-project__paragraph">
          <p className="about-project__title">Дипломный проект включал 5 этапов</p>
          <p className="about-project__text">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="about-project__paragraph">
          <p className="about-project__title">На выполнение диплома ушло 5 недель</p>
          <p className="about-project__text">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>

      <div className="about-project__timeline">
        <div className="about-project__back">1 неделя</div>
        <div className="about-project__front">4 недели</div>
        <div className="about-project__back-caption">Back-end</div>
        <div className="about-project__front-caption">Front-end</div>
      </div>
    </>
  );
};

export default AboutProject;
