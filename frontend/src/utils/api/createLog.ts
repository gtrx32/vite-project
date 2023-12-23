import { axiosClient } from '../../api/client';

export enum ActionsEnum {
  LOGIN = 'Вход',
  LOGOUT = 'Выход',
  SEND_MESSAGE = 'Отправка сообщения',
  CHANGE_AVATAR = 'Изменение аватара',
  CHANGE_PHONE = 'Изменение номера',
}

export const createLog = async (action: `${ActionsEnum}`, userEmail: string) => {
  const date = new Date(Date.now());

  return await axiosClient
    .post('/log', { action, userEmail, date: date as unknown as string })
    .then(response => response.data)
    .catch(error => error.response.data);
};
