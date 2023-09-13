import "./Form.css";
import logoPath from '../../images/logo.svg';

const Form = ({ name, title, buttonText, children }) => {
  return (
    <div className="form">
      <img className="form__logo" src={logoPath} alt="логотип" />
      <h1 className="form__title">{title}</h1>
      <form className="form__inputs" name={`${name}_form`}>
        <fieldset className="form__fields">
          {children}
        </fieldset>
        <button type="submit" aria-label={buttonText} className="form__button">{buttonText}</button>
      </form>
    </div>
  );
};

export default Form;
