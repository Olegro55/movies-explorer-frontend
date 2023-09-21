import { NavLink } from "react-router-dom";

import "./NavTab.css";
import iconPath from '../../images/close_icon.svg';
import AccountButton from "../AccountButton/AccountButton";

const NavTab = ({ isOpened, onClose }) => {
  return (
    <div className={`nav-tab ${isOpened ? 'nav-tab_opened' : ''}`}>
      <div className={`nav-tab__container ${isOpened ? 'nav-tab__container_opened' : ''}`}>
        <img className="nav-tab__close" src={iconPath} alt="кнопка закрытия меню навигации" onClick={onClose} />
        <div className="nav-tab__links">
          <NavLink to="/" className={({ isActive }) => `nav-tab__link ${isActive ? "nav-tab__link_active" : ""}`}>
            Главная
          </NavLink>
          <NavLink to="/movies" className={({ isActive }) => `nav-tab__link ${isActive ? "nav-tab__link_active" : ""}`}>
            Фильмы
          </NavLink>
          <NavLink to="/saved-movies" className={({ isActive }) => `nav-tab__link ${isActive ? "nav-tab__link_active" : ""}`}>
            Сохранённые&nbsp;фильмы
          </NavLink>
        </div>
        <AccountButton />
      </div>
    </div>
  );
};

export default NavTab;
