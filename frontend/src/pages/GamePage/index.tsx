import MainContainer from '../../components/MainContainer';
import Game from '../../components/Game';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

const GamePage = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (params.id && isNaN(+params.id)) {
      navigate('/404');
    } else {
      console.log(params.id);
    }
  }, []);

  return (
    <MainContainer>
      <Game />
    </MainContainer>
  );
};

export default GamePage;
