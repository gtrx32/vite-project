import { NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import s from './Header.module.scss';
import AuthBlock from './AuthBlock';

const Header: React.FC = () => {
  return (
    <header className={s.header}>
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
          <AuthBlock />
        </div>
      </MainContainer >
    </header >
  )
};

export default Header;