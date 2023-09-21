import { useNavigate } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  const onButtonClicked = () => {
    navigate(-1);
  }

  return (
    <div className="not-found">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__text">Страница не найдена</p>
      <button className="not-found__button" onClick={onButtonClicked}>Назад</button>
    </div>
  );
};

export default NotFound;
