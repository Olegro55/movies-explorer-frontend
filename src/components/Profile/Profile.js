import { useState, useContext, useEffect } from "react";

import "./Profile.css";

import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { useForm } from "../../hooks/useForm";

const Profile = ({ onLogout, onUpdateUser, updateMessage }) => {
  const currentUser = useContext(CurrentUserContext);

  const defaultMode = {
    formDisabled: true,
    controls: 'controls-enabled',
  }

  const { inputs, validationMessages, isFormValid, handleInput } = useForm({
    name: currentUser.name,
    email: currentUser.email,
  }, true);
  const [mode, changeMode] = useState(defaultMode);
  const [submitDisabled, setSubmitDisabled] = useState(true);

  useEffect(() => {
    if (inputs.name === currentUser.name && inputs.email === currentUser.email)
      setSubmitDisabled(true);
    else
      setSubmitDisabled(!isFormValid);
  }, [inputs]);

  function enableEditing() {
    changeMode({
      formDisabled: false,
      controls: 'controls-disabled',
    });
  }

  function updateProfile(e) {
    e.preventDefault();
    changeMode(defaultMode);
    onUpdateUser(inputs);
  }

  return (
    <main className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}!`}</h1>
      <form className="profile__info" onSubmit={updateProfile}>
        <fieldset className="profile__fields">
          <p className="profile__info-label">Имя</p>
          <input
            name="name"
            className="profile__info-input"
            value={inputs.name}
            onChange={handleInput}
            minLength="2"
            maxLength="30"
            required
            disabled={mode.formDisabled}
          />
          <span className="profile__message profile__error">{validationMessages.name}</span>
          <div className="profile__info_separator"></div>
          <p className="profile__info-label">E-mail</p>
          <input
            name="email"
            type="email"
            className="profile__info-input"
            value={inputs.email}
            onChange={handleInput}
            required
            disabled={mode.formDisabled}
          />
          <span className="profile__message profile__error">{validationMessages.email}</span>
        </fieldset>
        <span
          className={`profile__message ${updateMessage.success ? "profile__success" : "profile__error"}`}
        >
          {updateMessage.message}
        </span>
        <button
          type="submit"
          className={`profile__save${mode.formDisabled ? " profile__save_hidden" : ""}`}
          disabled={submitDisabled}
        >
          Сохранить
        </button>
        <p className={`profile__edit ${mode.controls}`} onClick={enableEditing}>Редактировать</p>
        <p className={`profile__logout ${mode.controls}`} onClick={onLogout}>Выйти из аккаунта</p>
      </form>
    </main>
  );
};

export default Profile;
