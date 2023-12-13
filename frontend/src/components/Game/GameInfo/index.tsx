import clsx from 'clsx';
import s from './GameInfo.module.scss';
import { GameType } from '../../../pages/CatalogPage/types';

interface GameInfoProps {
  game: GameType;
}

const GameInfo: React.FC<GameInfoProps> = ({ game }) => {
  const { name, date, genres, creator, platform, description, imageUrl } = game;

  return (
    <div className={s.game}>
      <div className={s.game__preview}>
        <div className={s.game__image}>
          <img src={imageUrl} alt={name} width={176} height={176} />
        </div>
        <div className={s.game__info}>
          <h2 className={s.game__title}>{name}</h2>
          <div className={clsx(s.game__parameter, s['parameter-date'])}>
            <span className={s['game__parameter-title']}>Дата выхода</span>
            <span className={s['game__parameter-value']}>{date}</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-genre'])}>
            <span className={s['game__parameter-title']}>Жанр</span>
            <span className={s['game__parameter-value']}>{genres.split(',').join(' ')}</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-creator'])}>
            <span className={s['game__parameter-title']}>Разработчик</span>
            <span className={s['game__parameter-value']}>{creator}</span>
          </div>
          <div className={clsx(s.game__parameter, s['parameter-platform'])}>
            <span className={s['game__parameter-title']}>Платформа</span>
            <span className={s['game__parameter-value']}>{platform}</span>
          </div>
        </div>
      </div>
      <div className={s.game__description}>
        <h3>Описание игры</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default GameInfo;
