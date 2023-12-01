import MainContainer from '../../components/MainContainer';
import Game from '../../components/Game';
import s from './GamePage.module.scss';

interface GamePageProps {
}

const GamePage: React.FC<GamePageProps> = () => {
  return (
    <MainContainer>
      <Game />
    </MainContainer>
  )
};

export default GamePage;