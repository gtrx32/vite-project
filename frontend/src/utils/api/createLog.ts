import { axiosClient } from '../../api/client';

export enum ActionsEnum {
  LOGIN = 'вход',
  LOGOUT = 'выход',
  SEND_MESSAGE = 'отправка сообщения',
}

export const createLog = async (action: `${ActionsEnum}`, userEmail: string) => {
  const date = new Date((Math.random() * 1000000000000) % Date.now());

  return await axiosClient
    .post('/log', { action, userEmail, date: date as unknown as string })
    .then(response => response.data)
    .catch(error => error.response.data);
};
