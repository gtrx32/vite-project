import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import s from './AdminPage.module.scss';

const AdminPage = () => {
  const { user } = useStateContext();

  if (user.is_admin !== 'admin') {
    return null;
  }

  return (
    <MainContainer className={s.page}>
      <div className={s['']}>admin page</div>
    </MainContainer>
  );
};

export default AdminPage;
