import { LogType } from '../../hooks/useLogs';
import { ActionsEnum } from '../../utils/api/createLog';

export const optionsForHours = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Статистика по часам',
    },
  },
  maintainAspectRatio: false
};

export const labelsForHours = Array.from({ length: 24 }, (_, i) => i);

export const getDataForHours = (action: `${ActionsEnum}`, logs: LogType[]) => {
  const array = Array.from({ length: 24 }, () => 0);

  logs
    .filter(log => log.action === action)
    .forEach(log => {
      const hours = new Date(log.date).getHours();
      array[hours] = array[hours] + 1;
    });

  return array;
};

export const optionsForDays = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Статистика по дням',
    },
  },
  maintainAspectRatio: false
};

export const labelsForDays = Array.from({ length: 31 }, (_, i) => i + 1);

export const getDataForDays = (action: `${ActionsEnum}`, logs: LogType[]) => {
  const array = Array.from({ length: 31 }, () => 0);

  logs
    .filter(log => log.action === action)
    .forEach(log => {
      const days = new Date(log.date).getUTCDate() - 1;
      array[days] = array[days] + 1;
    });

  return array;
};

export const optionsTotal = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Общая статистика',
    },
  },
  maintainAspectRatio: false
};

export const labelsTotal = ['Входы', 'Выходы', 'Сообщения', 'Изменения аватара', 'Изменения номера'];

export const getTotalData = (logs: LogType[]) => {
  const array = Array.from({ length: 5 }, () => 0);

  logs.forEach(log => {
    if (log.action === 'Вход') array[0] = array[0] + 1;
    if (log.action === 'Выход') array[1] = array[1] + 1;
    if (log.action === 'Отправка сообщения') array[2] = array[2] + 1;
    if (log.action === 'Изменение аватара') array[3] = array[3] + 1;
    if (log.action === 'Изменение номера') array[4] = array[4] + 1;
  })

  return array;
};