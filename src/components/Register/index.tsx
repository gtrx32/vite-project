import s from './Register.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../../../firebase/initFirebase'
import { RegisterUser, initialValue } from './types';

const Register: React.FC = () => {
  const [user, setUser] = useState<RegisterUser>(initialValue);

  const onHandleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [name]: value })
  }

  const navigate = useNavigate()

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
    <div className={s.wrapper}>
      <div className={s.form}>
        <input className={s.input} placeholder='Login' onChange={onHandleChange} type="email" name="email" />
        <input className={s.input} placeholder='Password' onChange={onHandleChange} type="password" name="password" />
        <input className={s.input} placeholder='Name' onChange={onHandleChange} type="text" name="name" />
        <button className={s.btn} onClick={onRegister} >Register</button>
      </div>
    </div>
  )
};

export default Register;