import "./MainSection.css";

const MainSection = ({ title, variant = "1", children}) => {
  return (
    <section className={`main-section main-section_variant${variant}`}>
      <h2 className="main-section__title">{title}</h2>
      {children}
    </section>
  );
};

export default MainSection;
