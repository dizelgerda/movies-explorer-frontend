import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <div className="profile__container">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__item">
          <label className="profile__label">Имя</label>
          <p className="profile__text">Виталий</p>
        </div>
        <div className="profile__item">
          <label className="profile__label">E-mail</label>
          <p className="profile__text">pochta@yandex.ru</p>
        </div>
      </div>
      <div className="profile__menu">
        <button className="profile__button">Редактировать</button>
        <button className="profile__button profile__button_dangerous">Выйти из аккаунта</button>
      </div>
    </div>
  );
}

export default Profile;
