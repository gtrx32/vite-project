import { NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import s from './Header.module.scss';

const Header: React.FC = () => (
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
        <div className={s.header__user}>
          <a href="#"><img src="/user.png" alt="userphoto" /></a>
        </div>
      </div>
    </MainContainer>
  </div >
);

export default Header;