import "./MoviesCard.css";

const MoviesCard = () => {
  let isLiked = true;

  return (
    <div className="card">
      <img className="card__image" src="https://api.nomoreparties.co/uploads/thumbnail_stones_in_exile_b2f1b8f4b7.jpeg" alt="" />
      <h2 className="card__name">33 слова о дизайне</h2>
      <button type="button" aria-label="лайк" className={`card__like ${isLiked && 'card__like_active'}`} />
      <p className="card__duration">1ч42м</p>
    </div>
  );
};

export default MoviesCard;
