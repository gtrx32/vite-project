import s from './Register.module.scss';
import { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { RegisterUser, initialValue } from './types';
import Button from '../UI/Button';
import Input from '../UI/Input';
import Invitation from '../UI/Invitation';
import FormInput from '../UI/FormInput';
import { axiosClient } from '../../api/client';
import { useStateContext } from '../../context/ContextProvider';

const Register = () => {
  const navigate = useNavigate();
  const [user, _setUser] = useState<RegisterUser>(initialValue);
  const [isCorrect, setIsCorrect] = useState<boolean>(false);
  const [errors, setErrors] = useState(null);

  const { setToken, setUser } = useStateContext();

  const onHandleChange = ({ target: { name, value } }: ChangeEvent<HTMLInputElement>) => {
    _setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    if (user.password !== user.passwordRep || user.password.length < 6 || user.email.length < 6 || user.name.length === 0) setIsCorrect(false);
    else setIsCorrect(true);
  }, [user]);

  const onRegister = () => {
    if (isCorrect) {
      const payload = {
        name: user.name,
        email: user.email,
        password: user.password,
      };

      axiosClient
        .post('/signup', payload)
        .then(({ data }) => {
          setToken(data.token);
          setUser(data.user);
          navigate('/');
        })
        .catch(error => {
          const response = error.response;
          if (response && response.status === 422) {
            setErrors(response.data.errors);
          }
        });
    }
  };

  return (
    <FormInput className={s.authForm}>
      {errors && (
        <div className='alert'>
          {Object.keys(errors).map(key => (
            <p key={key}>{errors[key][0]}</p>
          ))}
        </div>
      )}
      <Input placeholder='Имя' type='text' name='name' onChange={onHandleChange} />
      <Input placeholder='Почта' type='email' name='email' onChange={onHandleChange} />
      <Input placeholder='Пароль' type='password' name='password' onChange={onHandleChange} />
      <Input placeholder='Повторите пароль' type='password' name='passwordRep' onChange={onHandleChange} />
      <Button onClick={onRegister}>Зарегистрироваться</Button>
      <Invitation path='/login' text='Уже есть учетная запись? '>
        Авторизуйтесь
      </Invitation>
    </FormInput>
  );
};

export default Register;
