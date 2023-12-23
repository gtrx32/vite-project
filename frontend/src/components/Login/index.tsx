import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import s from './Login.module.scss';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Invitation from '../UI/Invitation';
import FormInput from '../UI/FormInput';
import { LoginUser, initialValue } from './types';
import { axiosClient } from '../../api/client';
import { useStateContext } from '../../context/ContextProvider';
import { createLog } from '../../utils/api/createLog';

const Login = () => {
  const navigate = useNavigate();
  const [user, _setUser] = useState<LoginUser>(initialValue);
  const [errors, setErrors] = useState(null);

  const { setToken, setUser } = useStateContext();

  const onHandleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    _setUser({ ...user, [target.name]: target.value });
  };

  const onLogin = () => {
    const payload = {
      email: user.email,
      password: user.password,
    };

    axiosClient
      .post('/login', payload)
      .then(({ data }) => {
        setToken(data.token);
        setUser(data.user);
        createLog('Вход', user.email);
        navigate('/');
      })
      .catch(error => {
        const response = error.response;
        if (response && response.status === 422) {
          setErrors(response.data.errors);
        }
      });
  };

  return (
    <FormInput className={s.authForm}>
      {errors && (
        <div className='alert'>
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key]}</p>
          ))}
        </div>
      )}
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
