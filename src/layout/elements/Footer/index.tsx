import MainContainer from '../../../components/MainContainer';
import s from './Footer.module.scss';

const Footer: React.FC = () => (
  <div className={s.footer}>
    <MainContainer>
      <div className={s.footer__inner}>
        <ul className={s.footer__menu}>
          <li><a href="#" >Главная</a></li>
          <li><a href="#" >Обзоры</a></li>
          <li><a href="#" >Каталог</a></li>
          <li><a href="#" >Чат</a></li>
        </ul>
        <div className={s.footer__copyright}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum libero nihil, quidem impedit sapiente!
          </p>
        </div>
        <ul className={s.footer__links}>
          <li><a href="#"><img src="/vkontakte.png" alt="vk" /></a></li>
          <li><a href="#"><img src="/telegram.png" alt="tg" /></a></li>
          <li><a href="#"><img src="/github.png" alt="gh" /></a></li>
          <li><a href="#"><img src="/discord.png" alt="ds" /></a></li>
        </ul>
      </div>
    </MainContainer>
  </div>
);

export default Footer;