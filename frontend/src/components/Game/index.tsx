import s from './Game.module.scss';
import GameInfo from './GameInfo';
import ScreenshotSlider from './ScreenshotSlider';

interface GameProps {
}

const Game: React.FC<GameProps> = () => {
  return (
    <div className={s.wrapper}>
      <GameInfo />
      <hr />
      <ScreenshotSlider />
    </div>
  )
};

export default Game;