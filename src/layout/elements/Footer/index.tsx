import { NavLink } from 'react-router-dom';
import MainContainer from '../../../components/MainContainer';
import s from './Footer.module.scss';

const Footer: React.FC = () => (
  <div className={s.footer}>
    <MainContainer>
      <div className={s.footer__inner}>
        <ul className={s.footer__menu}>
          <li><NavLink to="/" >Главная</NavLink></li>
          <li><NavLink to="/reviews" >Обзоры</NavLink></li>
          <li><NavLink to="/catalog" >Каталог</NavLink></li>
          <li><NavLink to="/chat" >Чат</NavLink></li>
        </ul>
        <div className={s.footer__copyright}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum libero nihil, quidem impedit sapiente!
          </p>
        </div>
        <ul className={s.footer__links}>
          <li><a href="#"><img src="icons/vkontakte.png" alt="vk" /></a></li>
          <li><a href="#"><img src="icons/telegram.png" alt="tg" /></a></li>
          <li><a href="#"><img src="icons/github.png" alt="gh" /></a></li>
          <li><a href="#"><img src="icons/discord.png" alt="ds" /></a></li>
        </ul>
      </div>
    </MainContainer>
  </div>
);

export default Footer;