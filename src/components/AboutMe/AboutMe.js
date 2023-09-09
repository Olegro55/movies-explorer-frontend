import "./AboutMe.css";
import photoPath from '../../images/photo.jpg';

const AboutMe = () => {
  return (
    <div className="about">
      <img className="about__photo" alt="фотография студента" src={photoPath} />
      <div className="about_info">
        <p className="about__title">Олег</p>
        <p className="about__subtitle">Руководитель проектов, 62 года</p>
        <p className="about__text">Родился и живу в Москве. Имею два высших образования: техническое и экономическое. Женат, у нас есть сын. Работаю удалённо над различными IT-проектами.</p>
        <a className="about__link" href="https://github.com/Olegro55">Github</a>
      </div>
    </div>
  );
};

export default AboutMe;
