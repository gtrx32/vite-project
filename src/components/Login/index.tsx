import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase/initFirebase';
import { initialValue } from '../Register/types';
import s from './Login.module.scss';

const Login: React.FC = () => {
  const [user, setUser] = useState<LoginUser>(initialValue);

  const onHandleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }

  const navigate = useNavigate()

  const onLogin = () => {
    signInWithEmailAndPassword(auth, user.email, user.password).then(() => {
      navigate('/')
    });
  }

  return (
    <div className={s.form}>
      <input className={s.form__login} placeholder='Логин' onChange={onHandleChange} type="email" name="email" />
      <input className={s.form__password} placeholder='Пароль' onChange={onHandleChange} type="password" name="password" />
      <button className={s.form__button} onClick={onLogin} >Войти</button>
      <p>Нет учетной записи? <NavLink className={s.reglink} to="/register">Зарегистрируйтесь</NavLink></p>
    </div>
  )
};

export default Login;