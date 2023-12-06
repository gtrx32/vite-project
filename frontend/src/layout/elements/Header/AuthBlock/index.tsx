import { NavLink, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../../../api/client';
import { useStateContext } from '../../../../context/ContextProvider';
import s from './AuthBlock.module.scss';

const AuthBlock = () => {
  const navigate = useNavigate();
  const { setUser, setToken, user } = useStateContext();

  const onLogout = () => {
    axiosClient.post('/logout').then(() => {
      setUser({});
      setToken('');
      navigate('/');
    });
  };

  return (
    <>
      {user?.name ? (
        <div className={s.auth}>
          <NavLink to='/profile'>{user?.name}</NavLink>
          <button className={s.button} onClick={onLogout}>
            Выйти
          </button>
        </div>
      ) : (
        <div className={s.auth}>
          <NavLink to='/login' className={s.button}>
            Вход
          </NavLink>
          <NavLink to='/register' className={s.button}>
            Регистрация
          </NavLink>
        </div>
      )}
    </>
  );
};

export default AuthBlock;
