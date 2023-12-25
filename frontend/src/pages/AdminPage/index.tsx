import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import s from './AdminPage.module.scss';
import { useLogs } from '../../hooks/useLogs';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Doughnut } from 'react-chartjs-2';
import { getDataForDays, getDataForHours, getTotalData, labelsForDays, labelsForHours, labelsTotal, optionsForHours, optionsForDays, optionsTotal } from './types';
import Button from '../../components/UI/Button';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ArcElement);

const AdminPage = () => {
  const { user } = useStateContext();
  const logs = useLogs();

  if (user.is_admin !== 'admin') {
    return null;
  }

  const downloadTxtFile = () => {
    const element = document.createElement('a');
    const file = new Blob([logs.map(log => log.date + ' ' + log.userEmail + ' ' + log.action).join('\r\n')], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'logs.txt';
    document.body.appendChild(element);
    element.click();
  };

  const dataForHours = {
    labels: labelsForHours,
    datasets: [
      {
        label: 'Входы',
        data: getDataForHours('Вход', logs),
        borderColor: 'rgb(0, 57, 92)',
        backgroundColor: 'rgba(0, 57, 92, 0.5)',
      },
      {
        label: 'Выходы',
        data: getDataForHours('Выход', logs),
        borderColor: 'rgb(96, 72, 135)',
        backgroundColor: 'rgba(96, 72, 135, 0.5)',
      },
      {
        label: 'Сообщения',
        data: getDataForHours('Отправка сообщения', logs),
        borderColor: 'rgb(190, 73, 134)',
        backgroundColor: 'rgba(190, 73, 134, 0.5)',
      },
      {
        label: 'Изменения аватара',
        data: getDataForHours('Изменение аватара', logs),
        borderColor: 'rgb(253, 99, 90)',
        backgroundColor: 'rgba(253, 99, 90, 0.5)',
      },
      {
        label: 'Изменения номера',
        data: getDataForHours('Изменение номера', logs),
        borderColor: 'rgb(255, 166, 0)',
        backgroundColor: 'rgba(255, 166, 0, 0.5)',
      },
    ],
  };

  const dataForDays = {
    labels: labelsForDays,
    datasets: [
      {
        label: 'Входы',
        data: getDataForDays('Вход', logs),
        borderColor: 'rgb(0, 57, 92)',
        backgroundColor: 'rgba(0, 57, 92, 0.5)',
      },
      {
        label: 'Выходы',
        data: getDataForDays('Выход', logs),
        borderColor: 'rgb(96, 72, 135)',
        backgroundColor: 'rgba(96, 72, 135, 0.5)',
      },
      {
        label: 'Сообщения',
        data: getDataForDays('Отправка сообщения', logs),
        borderColor: 'rgb(190, 73, 134)',
        backgroundColor: 'rgba(190, 73, 134, 0.5)',
      },
      {
        label: 'Изменения аватара',
        data: getDataForDays('Изменение аватара', logs),
        borderColor: 'rgb(253, 99, 90)',
        backgroundColor: 'rgba(253, 99, 90, 0.5)',
      },
      {
        label: 'Изменения номера',
        data: getDataForDays('Изменение номера', logs),
        borderColor: 'rgb(255, 166, 0)',
        backgroundColor: 'rgba(255, 166, 0, 0.5)',
      },
    ],
  };

  const dataTotal = {
    labels: labelsTotal,
    datasets: [
      {
        label: 'Количество',
        data: getTotalData(logs),
        backgroundColor: ['rgba(0, 57, 92, 0.4)', 'rgba(96, 72, 135, 0.4)', 'rgba(190, 73, 134, 0.4)', 'rgba(253, 99, 90, 0.4)', 'rgba(255, 166, 0, 0.4)'],
        borderColor: ['rgba(0, 57, 92, 1)', 'rgba(96, 72, 135, 1)', 'rgba(190, 73, 134, 1)', 'rgba(253, 99, 90, 1)', 'rgba(255, 166, 0, 1)'],
        borderWidth: 2,
      },
    ],
  };

  return (
    <MainContainer className={s.page}>
      <div className={s.logs}>
        <div className={s.logs__number}>Общее количество действий пользователей за всё время: {logs.length}</div>
        <Button className={s.logs__button} onClick={downloadTxtFile}>Скачать журнал</Button>
      </div>
      <div className={s.charts}>
        <div className={s.top}>
          <div className={s.chartBoxHours}>
            <Line options={optionsForHours} data={dataForHours} height={'500px'} />
          </div>
          <div className={s.chartBoxTotal}>
            <Doughnut options={optionsTotal} data={dataTotal} height={'500px'} />
          </div>
        </div>
        <div className={s.chartBoxDays}>
          <Line options={optionsForDays} data={dataForDays} height={'600px'} />
        </div>
      </div>
    </MainContainer>
  );
};

export default AdminPage;
