import { LogType } from '../../hooks/useLogs';
import { ActionsEnum } from '../../utils/api/createLog';

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

export const labels = Array.from({ length: 24 }, (_, i) => i);

export const getData = (action: `${ActionsEnum}`, logs: LogType[]) => {
  const array = Array.from({ length: 24 }, () => 0);

  logs
    .filter(log => log.action === action)
    .forEach(log => {
      const hours = new Date(log.date).getHours();
      array[hours] = array[hours] + 1;
    });

  return array;
};
