import { Link } from "react-router-dom";

import "./Form.css";
import logoPath from '../../images/logo.svg';

const Form = ({ name, title, buttonText, submitDisabled, serverError, onSubmit, children }) => {

  return (
    <div className="form">
      <Link to="/">
        <img className="form__logo" src={logoPath} alt="логотип" />
      </Link>
      <h1 className="form__title">{title}</h1>
      <form className="form__inputs" name={`${name}_form`} onSubmit={onSubmit}>
        <fieldset className="form__fields">
          {children}
        </fieldset>
        <span className="form__error">{serverError}</span>
        <button type="submit" aria-label={buttonText} className="form__button" disabled={submitDisabled}>{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
