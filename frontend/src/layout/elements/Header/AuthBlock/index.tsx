import { Link, NavLink, useNavigate } from 'react-router-dom';
import { axiosClient } from '../../../../api/client';
import { useStateContext } from '../../../../context/ContextProvider';
import s from './AuthBlock.module.scss';
import { createLog } from '../../../../utils/api/createLog';

const AuthBlock = () => {
  const navigate = useNavigate();
  const { setUser, setToken, user } = useStateContext();

  const onLogout = () => {
    axiosClient.post('/logout').then(() => {
      setUser({});
      setToken('');
      createLog('Выход', user.email);
      navigate('/');
    });
  };

  return (
    <>
      {user?.name ? (
        <div className={s.auth}>
          <Link to='/profile'>{user?.name}</Link>
          <button className={s.button} onClick={onLogout}>
            Выйти
          </button>
        </div>
      ) : (
        <div className={s.auth}>
          <Link to='/login' className={s.button}>
            Вход
          </Link>
          <Link to='/register' className={s.button}>
            Регистрация
          </Link>
        </div>
      )}
    </>
  );
};

export default AuthBlock;
