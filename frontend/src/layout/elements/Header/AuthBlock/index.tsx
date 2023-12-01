import { NavLink } from 'react-router-dom';
import s from './AuthBlock.module.scss';
import { useUser } from '../../../../hooks/useUser';
import { auth } from '../../../../../firebase/initFirebase';

const AuthBlock: React.FC = () => {
  const user = useUser()

  const onLogout = () => {
    auth.signOut().then(() => {
      location.reload();
    });
  }

  return (
    <>
      {user &&
        <div className={s.auth}>
          <NavLink to="/profile">{user.displayName}</NavLink>
          <button className={s.button} onClick={onLogout}>Выйти</button>
        </div>}
      {!user &&
        <div className={s.auth}>
          <NavLink to="/login" className={s.button}>Вход</NavLink>
          <NavLink to="/register" className={s.button}>Регистрация</NavLink>
        </div>}
    </>
  )
};

export default AuthBlock;