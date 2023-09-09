import "./Main.css";

import MainSection from '../MainSection/MainSection';
import Promo from '../Promo/Promo';
import AboutProject from '../AboutProject/AboutProject';
import Techs from '../Techs/Techs';
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';

const Main = () => {
  return (
    <main className="main">
      <Promo />
      <MainSection title="О проекте">
        <AboutProject />
      </MainSection>
      <MainSection title="Технологии" variant="2">
        <Techs />
      </MainSection>
      <MainSection title="Студент">
        <AboutMe />
        <Portfolio />
      </MainSection>
    </main>
  );
};

export default Main;
