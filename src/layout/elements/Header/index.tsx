import { NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import s from './Header.module.scss';
import { useUser } from '../../../hooks/useUser';
import { auth } from '../../../../firebase/initFirebase';

const Header: React.FC = () => {
  const user = useUser();

  const onLogout = () => {
    auth.signOut().then(() => {
      location.reload();
    });
  }

  return (
    <div className={s.header}>
      <MainContainer>
        <div className={s.header__inner}>
          <div className={s.header__logo}>
            <NavLink to="/"><img src="/logo.png" alt="logo" /></NavLink>
          </div>
          <ul>
            <li><NavLink to="/" >Главная</NavLink></li>
            <li><NavLink to="/reviews" >Обзоры</NavLink></li>
            <li><NavLink to="/catalog" >Каталог</NavLink></li>
            <li><NavLink to="/chat" >Чат</NavLink></li>
          </ul>
          {user && <div className={s.header__user}>
            <div className={s.header__userdata}>
              <NavLink to="/profile">{user.displayName}</NavLink>
              <button className={s.header__button} onClick={onLogout}>Выйти</button>
            </div>
          </div>}
          {!user && <div className={s.header__auth}>
            <NavLink to="/login" className={s.header__button}>Войти</NavLink>
          </div>}
        </div>
      </MainContainer >
    </div >
  )
};

export default Header;