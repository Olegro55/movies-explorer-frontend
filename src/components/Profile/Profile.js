import "./Profile.css";

const Profile = () => {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Олег!</h1>
      <div className="profile__info">
        <p className="profile__info_label">Имя</p>
        <p className="profile__info_text">Олег</p>
        <div className="profile__info_separator"></div>
        <p className="profile__info_label">E-mail</p>
        <p className="profile__info_text">pochta@yandex.ru</p>
      </div>
      <p className="profile__edit">Редактировать</p>
      <p className="profile__logout">Выйти из аккаунта</p>
    </main>
  ); 
};

export default Profile;
