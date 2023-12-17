import MainContainer from '../../components/MainContainer';
import s from './MainPage.module.scss';
import logo from "../../images/logo.png";
import Button from '../../components/UI/Button';
import { useNavigate } from 'react-router-dom';

const MainPage = () => {
  const navigate = useNavigate();

  const onClickCatalog = () => {
    navigate('/catalog');
  }
  const onClickChat = () => {
    navigate('/chat');
  }

  document.title = "Главная";

  return (
    <MainContainer className={s.mainContainer}>
      <h2>Молодой и перспективный сайт, посвященный игровой тематике</h2>
      <div><img src={logo} alt="logo" /></div>
      <div className={s.buttons}>
        <Button className={s.button} onClick={onClickCatalog}>Каталог</Button>
        <Button className={s.button} onClick={onClickChat}>Чат</Button>
      </div>
    </MainContainer>
  )
};

export default MainPage;