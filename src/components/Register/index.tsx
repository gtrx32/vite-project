import s from './Register.module.scss';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/initFirebase'
import { RegisterUser, initialValue } from './types';

const Register: React.FC = () => {
  const [user, setUser] = useState<RegisterUser>(initialValue);
  const navigate = useNavigate()

  const onHandleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }

  const onRegister = () => {
    createUserWithEmailAndPassword(auth, user.email, user.password).then(() => {
      if (auth.currentUser) {
        updateProfile(auth.currentUser, { displayName: user.name }).then(() => {
          auth.currentUser?.reload()
        }).then(() => {
          navigate('/')
        })
      }
    });
  }

  return (
    <div className={s.form}>
      <input placeholder='Имя' onChange={onHandleChange} type="text" name="name" />
      <input placeholder='Логин' onChange={onHandleChange} type="email" name="email" />
      <input placeholder='Пароль' onChange={onHandleChange} type="password" name="password" />
      <input placeholder='Повторите пароль' type="password" name="password2" />
      <button onClick={onRegister} >Зарегистрироваться</button>
      <p>Уже есть учетная запись? <NavLink className={s.authlink} to="/login">Авторизуйтесь</NavLink></p>
    </div>
  )
};

export default Register;