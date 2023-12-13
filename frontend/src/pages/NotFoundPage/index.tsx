import MainContainer from '../../components/MainContainer';
import s from './NotFoundPage.module.scss';

const NotFoundPage = () => (
  <MainContainer className={s.notFoundContainer}>
    <h1>404</h1>
    <p>Страница не найдена</p>
  </MainContainer>
);

export default NotFoundPage;
