import { GameType } from '../../../pages/CatalogPage/types';
import s from './ScreenshotSlider.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

interface ScreenshotSliderProps {
  game: GameType;
}

const ScreenshotSlider: React.FC<ScreenshotSliderProps> = ({ game }) => {
  const sliders = game.images.split('\n').map((image, index) => ({ path: image, id: index }));

  return (
    <div className={s['']}>
      <Swiper slidesPerView={2} spaceBetween={30} loop={true} pagination={{ clickable: true }} navigation={true} modules={[Pagination, Navigation]} className='mySwiper'>
        {sliders.map(({ path, id }) => (
          <SwiperSlide key={id}>
            <div className={s['image-wrapper']}>
              <img src={path} alt='' />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style>
        {`
          .swiper {
            width: 100%;
            height: 100%;
          }
          
          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
          
            /* Center slide text vertically */
            display: flex;
            justify-content: center;
            align-items: center;
          }
          
          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          
          .swiper {
            margin-left: auto;
            margin-right: auto;
          }
          `}
      </style>
    </div>
  );
};

export default ScreenshotSlider;
