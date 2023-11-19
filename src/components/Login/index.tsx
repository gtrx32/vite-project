import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
    <div className={s.wrapper}>
      <div className={s.form}>
        <input className={s.input} placeholder='Login' onChange={onHandleChange} type="email" name="email" />
        <input className={s.input} placeholder='Password' onChange={onHandleChange} type="password" name="password" />
        <button className={s.btn} onClick={onLogin} >Login</button>
      </div>
    </div>
  )
};

export default Login;