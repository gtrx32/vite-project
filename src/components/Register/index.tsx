import s from './Register.module.scss';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/initFirebase'
import { RegisterUser, initialValue } from './types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Invitation from '../UI/Invitation';
import FormInput from '../UI/FormInput';

const Register: React.FC = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState<RegisterUser>(initialValue);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);

  const onHandleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    if (user.password !== user.passwordRep
      || user.password.length < 6
      || user.email.length < 6
      || user.name.length === 0) setIsCorrect(false)
    else setIsCorrect(true);
  }, [user]);

  const onRegister = () => {
    if (isCorrect)
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
    <FormInput className={s.authForm}>
      <Input placeholder="Имя" type="text" name="name" onChange={onHandleChange} />
      <Input placeholder="Почта" type="email" name="email" onChange={onHandleChange} />
      <Input placeholder="Пароль" type="password" name="password" onChange={onHandleChange} />
      <Input placeholder="Повторите пароль" type="password" name="passwordRep" onChange={onHandleChange} />
      <Button onClick={onRegister}>Зарегистрироваться</Button>
      <Invitation path="/login" text="Уже есть учетная запись? ">Авторизуйтесь</Invitation>
    </FormInput>
  )
};

export default Register;