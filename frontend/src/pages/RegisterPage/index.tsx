import MainContainer from '../../components/MainContainer';
import Register from '../../components/Register';
import s from './RegisterPage.module.scss';

const RegisterPage = () => {
  document.title = "Регистрация";

  return (
    <MainContainer className={s.registerContainer}>
      <Register />
    </MainContainer>
  );
}
export default RegisterPage;
