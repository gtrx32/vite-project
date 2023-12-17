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
            Сайт разработан с уходом и вниманием Газдиева Тимура О-21-ПРИ-рпс-Б © 2023
          </p>
        </div>
        <ul className={s.footer__links}>
          <li><a href="https://vk.com/gtrx32" target='_blank'><img src={vkontakte} alt="vk" /></a></li>
          <li><a href="https://vk.com/gtrx32" target='_blank'><img src={telegram} alt="tg" /></a></li>
          <li><a href="https://github.com/gtrx32" target='_blank'><img src={github} alt="gh" /></a></li>
          <li><a href="https://discordapp.com/users/500160765194403857" target='_blank'><img src={discord} alt="ds" /></a></li>
        </ul>
      </div>
    </MainContainer>
  </footer>
);

export default Footer;