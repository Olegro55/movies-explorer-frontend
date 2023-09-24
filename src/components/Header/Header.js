import { Link, NavLink, useLocation } from "react-router-dom";

import "./Header.css";
import logoPath from '../../images/logo.svg';
import menuIconWhitePath from '../../images/menu-icon-white.svg';
import menuIconBlackPath from '../../images/menu-icon-black.svg';
import AccountButton from "../AccountButton/AccountButton";
import NavTab from "../NavTab/NavTab";

const Header = ({ isLoggedIn, isMenuOpened, onMenuOpen, onMenuClose }) => {
  const location = useLocation().pathname

  let [headerClassName, accountButtonDark, menuButtonSrc] = ["header", false, menuIconBlackPath];
  if (location === '/') [headerClassName, accountButtonDark, menuButtonSrc] = ["header header_dark", true, menuIconWhitePath];

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
            <Link to="/signin" className="header__login-button" >Войти</Link>
            :
            <>
              <AccountButton dark={accountButtonDark} hidable />
              <button className="header__menu-button" onClick={onMenuOpen}><img className="header__menu-button-icon" src={menuButtonSrc} alt="кнопка меню" /></button>
              <NavTab isOpened={isMenuOpened} onClose={onMenuClose} />
            </>
          }
        </div>
      </header >
    );
};

export default Header;
