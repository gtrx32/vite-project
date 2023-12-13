import { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer';
import s from './CatalogPage.module.scss';
import { CatalogPageProps, GameType } from './types';
import { useNavigate } from 'react-router-dom';

const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [data, setData] = useState<GameType[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/games');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const onHandleClick = (gameId: number) => navigate(`/game/${gameId}`);

  return (
    <MainContainer>
      <div className={s.catalog}>
        {data.map(({ id, name, imageUrl, platform }) => (
          <div key={id} className={s.game} onClick={() => onHandleClick(id)}>
            <div className={s['game__image']}>
              <img loading='lazy' src={imageUrl} alt='' />
            </div>
            <div className={s['game__name']}>{name}</div>
            <div className={s['game__platform']}>{platform}</div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default CatalogPage;
