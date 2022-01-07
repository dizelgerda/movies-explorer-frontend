import { Link } from 'react-router-dom';

import './Register.css';
import logo from '../../images/logo.svg';
import { useEffect, useState } from 'react';

function Register({ onSubmit }) {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({ ...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
        <h1 className="login__title">Добро пожаловать!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="name" className="login__label">Имя</label>
          <input name="name" type="text" className="login__input" placeholder="Имя" onChange={handleChange} required />
          <span className="login__error"></span>
          <label htmlFor="email" className="login__label" >E-mail</label>
          <input name="email" type="email" className="login__input" placeholder="E-mail" onChange={handleChange} required />
          <span className="login__error"></span>
          <label htmlFor="password" className="login__label">Пароль</label>
          <input name="password" type="password" className="login__input" placeholder="Пароль" onChange={handleChange} required />
          <span className="login__error"></span>
          <button className="login__submit">Зарегистрироваться</button>
          <p className="login__text">Уже зарегистрированы? <Link to="/signin" className="login__link">Войти</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Register;
