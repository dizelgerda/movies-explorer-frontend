import { Link } from 'react-router-dom';
import { useState } from 'react';

import './Login.css';
import logo from '../../images/logo.svg';

function Login({ onSubmit }) {
  const [data, setData] = useState({});

  function handleChange(e) {
    const { target: { name, value } } = e;
    setData({...data, [name]: value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <div className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="login__label">E-mail</label>
          <input name="email" type="email" className="login__input" placeholder="E-mail" onChange={handleChange} required />
          <span className="login__error"></span>
          <label htmlFor="password" className="login__label" >Пароль</label>
          <input name="password" type="password" className="login__input" placeholder="Пароль" onChange={handleChange} required />
          <span className="login__error"></span>
          <button className="login__submit">Войти</button>
          <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
