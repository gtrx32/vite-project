import { Link, NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import s from './Header.module.scss';
import AuthBlock from './AuthBlock';

import logo from "../../../images/logo.png";

const Header = () => {
  return (
    <header className={s.header}>
      <MainContainer>
        <div className={s.header__inner}>
          <div className={s.header__logo}>
            <Link to="/"><img src={logo} alt="logo" /></Link>
          </div>
          <ul>
            <li><NavLink to="/" >Главная</NavLink></li>
            {/* <li><NavLink to="/reviews" >Обзоры</NavLink></li> */}
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