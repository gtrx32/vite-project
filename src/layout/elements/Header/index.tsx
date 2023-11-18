import MainContainer from '../../../components/MainContainer';
import s from './Header.module.scss';

const Header: React.FC = () => (
  <div className={s.header}>
    <MainContainer>
      <div className={s.header__inner}>
        <div className={s.header__logo}>
          <a href="#"><img src="/logo.png" alt="logo" /></a>
        </div>
        <ul>
          <li><a href="#" >Главная</a></li>
          <li><a href="#" >Обзоры</a></li>
          <li><a href="#" >Каталог</a></li>
          <li><a href="#" >Чат</a></li>
        </ul>
        <div className={s.header__user}>
          <a href="#"><img src="/user.png" alt="userphoto" /></a>
        </div>
      </div>
    </MainContainer>
  </div >
);

export default Header;