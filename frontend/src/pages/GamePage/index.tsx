import MainContainer from '../../components/MainContainer';
import Game from '../../components/Game';
import { useParams } from 'react-router-dom';

const GamePage = () => {
  const params = useParams();

  console.log(params); // 👉️ {userId: '4200'}

  return (
    <MainContainer>
      <Game />
    </MainContainer>
  );
};

export default GamePage;
