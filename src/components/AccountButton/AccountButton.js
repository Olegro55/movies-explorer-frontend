import { Link } from "react-router-dom";

import iconPath from '../../images/account-icon.svg';
import "./AccountButton.css";

const AccountButton = ({ dark, hidable }) => {
  let styleModifier = ""
  if (dark) styleModifier += " account-button_dark";
  if (hidable) styleModifier += " account-button_hidable";
  
  return (
    <Link to="/profile" className={`account-button${styleModifier}`}>
      Аккаунт
      <img className="header__account-icon" src={iconPath} alt="иконка профиля" />
    </Link>
  );
};

export default AccountButton;
