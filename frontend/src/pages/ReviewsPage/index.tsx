import { useState, useEffect } from 'react';
import MainContainer from '../../components/MainContainer';
import { ReviewType } from './types';

import s from './ReviewsPage.module.scss';

const ReviewsPage = () => {
  const [data, setData] = useState<ReviewType[]>([]);

  console.log(data);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://127.0.0.1:8000/api/reviews');
      const data = await response.json();
      setData(data);
    };

    fetchData();
  }, []);

  return (
    <MainContainer>
      <div className={s.reviews}>
        {data.map(({ id, name, description, date }) => (
          <div key={id} className={s.review}>
            <div className={s['review__name']}>{name}</div>
            <div className={s['review__text']}>{description}</div>
            <div className={s['review__date']}>{date}</div>
          </div>
        ))}
      </div>
    </MainContainer>
  );
};

export default ReviewsPage;
