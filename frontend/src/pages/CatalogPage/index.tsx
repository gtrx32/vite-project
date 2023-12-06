import { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer';
import s from './CatalogPage.module.scss';

interface CatalogPageProps {}

export type Game = {
  id: number;
  name: string;
  date: string;
  creator: string;
  platform: string;
  imageUrl: string;
  genres: string;
  description: string;
  images: string;
  created_at: string;
  updated_at: string;
};

const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [data, setData] = useState<Game[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/games');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <div className={s.catalog}>
        {data.map(({ id, name, imageUrl, platform }) => (
          <div key={id} className={s.game}>
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
