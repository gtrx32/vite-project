import Login from '../../components/Login';
import MainContainer from '../../components/MainContainer';
import s from './LoginPage.module.scss';

const LoginPage = () => {
  document.title = "Авторизация";

  return (
    <MainContainer className={s.loginContainer}>
      <Login />
    </MainContainer>
  );
}
export default LoginPage;
