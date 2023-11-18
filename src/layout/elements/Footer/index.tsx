import s from './Footer.module.scss';

interface FooterProps {
}

const Footer: React.FC<FooterProps> = () => (
  <div className={s.footer}>
    <ul>
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
    <div className={s.footer__links}>
      <a href="#"><img src="/vkontakte.png" alt="vk" /></a>
      <a href="#"><img src="/telegram.png" alt="tg" /></a>
      <a href="#"><img src="/github.png" alt="gh" /></a>
      <a href="#"><img src="/discord.png" alt="ds" /></a>
    </div>
  </div>
);

export default Footer;