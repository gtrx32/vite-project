import MainContainer from '../../components/MainContainer';
import Register from '../../components/Register';
import s from './RegisterPage.module.scss';

interface RegisterPageProps {
}

const RegisterPage: React.FC<RegisterPageProps> = () => {
  return (
    <MainContainer>
      <Register />
    </MainContainer>
  )
};

export default RegisterPage;