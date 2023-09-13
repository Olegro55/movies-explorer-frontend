import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";
import logoPath from '../../images/logo.svg';
import accountIconPath from '../../images/account-icon.svg';
import menuIconWhitePath from '../../images/menu-icon-white.svg';
import menuIconBlackPath from '../../images/menu-icon-black.svg';

const Header = () => {
  const location = useLocation().pathname

  let isLoggedIn = true;
  let [headerClassName, accountButtonClassName, menuButtonSrc] = ["header", "header__account-button", menuIconBlackPath];
  if (location === '/') [headerClassName, accountButtonClassName, menuButtonSrc] = ["header header_dark", "header__account-button header__account-button_dark", menuIconWhitePath];

  return (location === '/' || location === '/saved-movies' || location === '/movies' || location === '/profile') &&
    (
      <header className={headerClassName}>
        <Link to="/">
          <img className="header__logo" src={logoPath} alt="логотип" />
        </Link>
        {isLoggedIn &&
          <div className="header__links">
            <NavLink to="/movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>
              Фильмы
            </NavLink>
            <NavLink to="/saved-movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>
              Сохранённые&nbsp;фильмы
            </NavLink>
          </div>
        }
        <div className="header__account">
          {!isLoggedIn && <Link to="/signup" className="header__link">Регистрация</Link>}
          {!isLoggedIn ?
          <Link to="/signip" className="header__login-button" >Войти</Link>
            :
            <Link to="/profile" className={accountButtonClassName}>
              Аккаунт
              <img className="header__account-icon" src={accountIconPath} alt="иконка профиля" />
            </Link>
          }
          <button className="header__menu-button" ><img className="header__menu-button-icon" src={menuButtonSrc} alt="кнопка меню" /></button>
        </div>
      </header >
    );
};

export default Header;
