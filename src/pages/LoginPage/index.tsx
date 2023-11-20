import Login from '../../components/Login';
import MainContainer from '../../components/MainContainer';
import s from './LoginPage.module.scss';

interface LoginPageProps {
}

const LoginPage: React.FC<LoginPageProps> = () => {
  return (
    <MainContainer className={s.loginContainer}>
      <Login />
    </MainContainer>
  )
};

export default LoginPage;