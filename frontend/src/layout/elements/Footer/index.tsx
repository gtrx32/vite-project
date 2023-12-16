import MainContainer from '../../../components/MainContainer';
import s from './Footer.module.scss';

import vkontakte from "../../../images/icons/vkontakte.png";
import telegram from "../../../images/icons/telegram.png";
import github from "../../../images/icons/github.png";
import discord from "../../../images/icons/discord.png";

const Footer: React.FC = () => (
  <footer className={s.footer}>
    <MainContainer>
      <div className={s.footer__inner}>
        <div className={s.footer__copyright}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt rerum libero nihil, quidem impedit sapiente!
          </p>
        </div>
        <ul className={s.footer__links}>
          <li><a href="#"><img src={vkontakte} alt="vk" /></a></li>
          <li><a href="#"><img src={telegram} alt="tg" /></a></li>
          <li><a href="#"><img src={github} alt="gh" /></a></li>
          <li><a href="#"><img src={discord} alt="ds" /></a></li>
        </ul>
      </div>
    </MainContainer>
  </footer>
);

export default Footer;