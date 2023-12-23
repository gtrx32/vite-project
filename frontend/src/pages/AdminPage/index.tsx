import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import s from './AdminPage.module.scss';
import useCreateLog from '../../hooks/useCreateLog';
import { useLogs } from '../../hooks/useLogs';
import { useEffect } from 'react';

const AdminPage = () => {
  const { user } = useStateContext();
  const logs = useLogs();

  useCreateLog('выход');

  useEffect(() => {
    console.log(logs);
  }, [logs]);

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
