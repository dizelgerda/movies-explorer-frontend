import { Link } from 'react-router-dom';

import './Login.css';
import logo from '../../images/logo.svg';

function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <Link to="/"><img className="login__logo" src={logo} alt="Лого" /></Link>
        <h1 className="login__title">Рады видеть!</h1>
        <form className="login__form">
          <label for="email" className="login__label">E-mail</label>
          <input id="email" type="email" className="login__input" placeholder="E-mail" required />
          <span className="login__error"></span>
          <label for="password" className="login__label" >Пароль</label>
          <input name="password" type="password" className="login__input" placeholder="Пароль" required />
          <span className="login__error"></span>
          <button className="login__submit">Войти</button>
          <p className="login__text">Ещё не зарегистрированы? <Link to="/signup" className="login__link">Регистрация</Link></p>
        </form>
      </div>
    </div>
  );
}

export default Login;
