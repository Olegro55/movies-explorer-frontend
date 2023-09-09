import { Link, NavLink } from "react-router-dom";

import "./Header.css";
import logoPath from '../../images/logo.svg';
import accountIconPath from '../../images/account-icon.svg';
import menuIconPath from '../../images/menu-icon.svg';

const Header = () => {
  let isLoggedIn = true;
  return (
    <header className="header">
      <Link to="/">
        <img className="header__logo" src={logoPath} alt="логотип" />
      </Link>
      {isLoggedIn &&
        <div className="header__links">
          <NavLink to="/movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => `header__link ${isActive ? "header__link_active" : ""}`}>
            Сохранённые фильмы
          </NavLink>
        </div>
      }
      <div className="header__account">
        {!isLoggedIn && <Link to="/signup" className="header__link">Регистрация</Link>}
        {!isLoggedIn ?
          <button className="header__login-button" >Войти</button>
          :
          <button className="header__account-button">
            Аккаунт
            <img className="header__account-icon" src={accountIconPath} alt="иконка профиля" />
          </button>
        }
        <button className="header__menu-button" ><img className="header__menu-button-icon" src={menuIconPath} alt="кнопка меню" /></button>
      </div>
    </header >
  );
};

export default Header;
