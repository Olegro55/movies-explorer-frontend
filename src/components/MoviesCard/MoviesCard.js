import { useContext } from "react";

import "./MoviesCard.css";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

const MoviesCard = ({ movie, isFromSearch, onSave, onDelete }) => {
  const currentUser = useContext(CurrentUserContext);
  const isSaved = movie.owner === currentUser.id;

  const imageUrl = isFromSearch ? `https://api.nomoreparties.co${movie.image.url}` : movie.image;
  const thumbnail = isFromSearch ? `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}` : movie.thumbnail;
  const hours = Math.floor(movie.duration / 60);
  const minutes = movie.duration % 60;
  const duration = `${hours}ч ${minutes}м`;

  function handleSave() {
    const data = {
      country: movie.country,
      director: movie.director,
      duration: movie.duration,
      year: movie.year,
      description: movie.description,
      image: imageUrl,
      trailerLink: movie.trailerLink,
      nameRU: movie.nameRU,
      nameEN: movie.nameEN,
      thumbnail: thumbnail,
      movieId: movie.id,
    }
    onSave(data);
  }

  function handleDelete() {
    onDelete(movie);
  }

  return (
    <div className="card">
      <a className="card__link" target="_blank" href={movie.trailerLink}>
        <img className="card__image" src={imageUrl} alt="" />
      </a>
      <h2 className="card__name">{movie.nameRU}</h2>
      {
        isFromSearch ?
          <button type="button" aria-label="сохранить" className={`card__save${isSaved ? ' card__save_active' : ''}`} onClick={isSaved ? handleDelete : handleSave} />
          :
          <button type="button" aria-label="удалить" className="card__delete" onClick={handleDelete} />
      }
      <p className="card__duration">{duration}</p>
    </div>
  );
};

export default MoviesCard;
