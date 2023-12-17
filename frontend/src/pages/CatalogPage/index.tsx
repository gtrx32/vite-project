import { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer';
import s from './CatalogPage.module.scss';
import { CatalogPageProps, GameType } from './types';
import { useNavigate } from 'react-router-dom';
import Input from '../../components/UI/Input';

const CatalogPage: React.FC<CatalogPageProps> = () => {
  const [data, setData] = useState<GameType[]>([]);
  const navigate = useNavigate();

  const [name, setName] = useState<string>("");
  const [genres, setGenres] = useState<string>("");
  const [platform, setPlatform] = useState<string>("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/games');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  const onHandleClick = (gameId: number) => navigate(`/game/${gameId}`);

  document.title = "Каталог";

  const onChangeNameHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => { setName(value); }
  const onChangeGenresHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => { setGenres(value); }
  const onChangePlatformHandler = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => { setPlatform(value); }

  const filteredData = data.filter(game => {
    const nameMatch = game.name.toLowerCase().includes(name.toLowerCase());
    const genresMatch = game.genres.toLowerCase().includes(genres.toLowerCase());
    const platformMatch = game.platform.toLowerCase().includes(platform.toLowerCase());
    return genresMatch && nameMatch && platformMatch;
  });

  return (
    <MainContainer className={s.catalogContainer}>
      <div className={s.filters}>
        <h2>Фильтры</h2>
        <div className={s.filters__inner}>
          <div className={s.filters__item}>
            <label>Название</label>
            <Input type="text" value={name} onChange={onChangeNameHandler} />
          </div>
          <div className={s.filters__item}>
            <label>Жанр</label>
            <Input type="text" value={genres} onChange={onChangeGenresHandler} />
          </div>
          <div className={s.filters__item}>
            <label>Платформа</label>
            <Input type="text" value={platform} onChange={onChangePlatformHandler} />
          </div>
        </div>
      </div>
      <h2>Каталог</h2>
      <div className={s.catalog}>
        {filteredData.map(({ id, name, imageUrl, genres }) => (
          <div key={id} className={s.game} onClick={() => onHandleClick(id)} >
            <div className={s['game__image']}>
              <img loading='lazy' src={imageUrl} alt='' />
            </div>
            <div className={s['game__info']}>
              <div className={s['game__name']}>{name}</div>
              <div className={s['game__genre']}>{genres.split(',').join(' ')}</div>
            </div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default CatalogPage;
