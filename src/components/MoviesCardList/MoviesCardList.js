import "./MoviesCardList.css";

const MoviesCardList = ({ children }) => {
  return (
    <div className="cards-list">
      {children}
    </div>
  );
};

export default MoviesCardList;
