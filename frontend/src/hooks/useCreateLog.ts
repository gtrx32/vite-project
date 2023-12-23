import { useEffect } from 'react';
import { useStateContext } from '../context/ContextProvider';
import { axiosClient } from '../api/client';

export enum ActionsEnum {
  LOGIN = 'вход',
  LOGOUT = 'выход',
  SEND_MESSAGE = 'отправка сообщения',
}

const createLog = async (action: `${ActionsEnum}`, userEmail: string) => {
  const date = new Date().getTime();

  return await axiosClient
    .post('/log', { action, userEmail, date: date as unknown as string })
    .then(response => response.data)
    .catch(error => error.response.data);
};

export const useCreateLog = (action: `${ActionsEnum}`) => {
  const { user } = useStateContext();

  useEffect(() => {
    if (user.email) {
      createLog(action, user.email).then(res => {
        console.log(res);
      });
    }
  }, [user.email]);
};

export default useCreateLog;
