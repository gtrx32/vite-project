import { useState } from 'react';
import Invitation from '../../UI/Invitation';
import Button from '../../UI/Button';
import { useStateContext } from '../../../context/ContextProvider';
import s from './FormMessage.module.scss';
import { format } from 'date-fns';
import { axiosClient } from '../../../api/client';
import { createLog } from '../../../utils/api/createLog';

const FormMessage = () => {
  const [value, setValue] = useState<string>('');
  const { user } = useStateContext();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!value) return;

    const payload = {
      text: value,
      userEmail: user.email,
      userName: user.name,
      date: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
    };

    axiosClient.post('/message', payload).then(() => {
      createLog('отправка сообщения', user.email);
    });
    setValue('');
  };

  return (
    <>
      {user?.name ? (
        <form className={s.formMessage} onSubmit={onSubmitHandler}>
          <textarea value={value} onChange={e => setValue(e.target.value)} />
          <Button className={s.buttonSend}>Отправить</Button>
        </form>
      ) : (
        <Invitation className={s.invitation} path='/login' text='Отправка сообщений доступна только авторизованным пользователям. '>
          Авторизоваться
        </Invitation>
      )}
    </>
  );
};

export default FormMessage;
