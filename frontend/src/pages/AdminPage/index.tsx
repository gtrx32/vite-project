import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import s from './AdminPage.module.scss';
import { useLogs } from '../../hooks/useLogs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { getData, labels, options } from './types';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const AdminPage = () => {
  const { user } = useStateContext();
  const logs = useLogs();

  // useEffect(() => {
  //   createLog('вход', user.email);
  //   createLog('вход', user.email);
  // }, [user.email]);

  if (user.is_admin !== 'admin') {
    return null;
  }

  const data = {
    labels,
    datasets: [
      {
        label: 'Выходы',
        data: getData('выход', logs),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Входы',
        data: getData('вход', logs),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'отправка сообщения',
        data: getData('отправка сообщения', logs),
        borderColor: 'rgb(123, 33, 235)',
        backgroundColor: 'rgba(123, 23, 235, 0.5)',
      },
    ],
  };

  return (
    <MainContainer className={s.page}>
      <div className={s['']}>{logs.length}</div>
      <Line options={options} data={data} />
    </MainContainer>
  );
};

export default AdminPage;
