import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Login.module.scss';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Invitation from '../UI/Invitation';
import FormInput from '../UI/FormInput';
import { LoginUser, initialValue } from './types';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<LoginUser>(initialValue);

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [target.name]: target.value });
  };

  const onLogin = () => {
    // Проверка на пустые поля
  };

  return (
    <FormInput className={s.authForm}>
      <Input placeholder='Почта' type='email' name='email' onChange={onHandleChange} />
      <Input placeholder='Пароль' type='password' name='password' onChange={onHandleChange} />
      <Button onClick={onLogin}>Войти</Button>
      <Invitation path='/register' text='Нет учетной записи? '>
        Зарегистрируйтесь
      </Invitation>
    </FormInput>
  );
};

export default Login;
