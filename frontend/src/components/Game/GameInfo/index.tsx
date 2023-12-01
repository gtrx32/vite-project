import clsx from 'clsx';
import s from './GameInfo.module.scss';

interface GameInfoProps {
}

const GameInfo: React.FC<GameInfoProps> = () => {
  return (
    <div className={s.game}>
      <div className={s.game__preview}>
        <div className={s.game__image}>
          <img src="https://images.stopgame.ru/games/logos/26359/c224x224/lG4r-bPwU4dvryyc_NdO-g/counter_strike_2-square.jpg" alt="" />
        </div>
        <div className={s.game__info}>
          <h2 className={s.game__title}>Counter Strike 2</h2>
          <div className={clsx(s.game__parameter, s['parameter-date'])}>
            <span className={s['game__parameter-title']}>Дата выхода</span>
            <span className={s['game__parameter-value']}>27 сентября 2023</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-genre'])}>
            <span className={s['game__parameter-title']}>Жанр</span>
            <span className={s['game__parameter-value']}>Экшн Онлайн</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-creator'])}>
            <span className={s['game__parameter-title']}>Разработчик</span>
            <span className={s['game__parameter-value']}>Valve</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-platform'])}>
            <span className={s['game__parameter-title']}>Платформа</span>
            <span className={s['game__parameter-value']}>PC</span>
          </div>
        </div>
      </div>
      <div className={s.game__description}>
        <h3>Описание игры</h3>
        <p>
          Counter-Strike 2 — компьютерная игра в жанре многопользовательского тактического шутера от первого лица, разрабатываемая
          компанией Valve. Она стала 5-й игрой в серии Counter-Strike и заявляется как бесплатное обновление к Global Offensive.
          Игра отличается крупными техническими улучшениями по сравнению с Global Offensive, включая переход с игрового движка
          Source на Source 2, улучшенную графику и новую клиент-серверную архитектуру. Кроме того, многие карты
          из Global Offensive были обновлены, чтобы использовать функции Source 2, а некоторые карты были полностью переработаны.
        </p>
      </div>
    </div>
  )
};

export default GameInfo;