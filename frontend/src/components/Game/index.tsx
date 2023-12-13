import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { GameType } from '../../pages/CatalogPage/types';
import s from './Game.module.scss';
import GameInfo from './GameInfo';
import ScreenshotSlider from './ScreenshotSlider';

const Game = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [game, setGame] = useState<GameType>();

  useEffect(() => {
    if (params.id && isNaN(+params.id)) {
      navigate('/404');
    } else {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/game/' + params.id);
        const data = await response.json();
        setGame(data);
      };

      fetchData();
    }
  }, []);

  return (
    <>
      {game && (
        <div className={s.wrapper}>
          <GameInfo game={game} />
          <hr />
          <ScreenshotSlider game={game} />
        </div>
      )}
    </>
  );
};

export default Game;
