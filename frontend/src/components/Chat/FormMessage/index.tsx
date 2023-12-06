import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import s from './FormMessage.module.scss';
import Invitation from '../../UI/Invitation';
import Button from '../../UI/Button';

interface FormMessageProps {
}

const FormMessage: React.FC<FormMessageProps> = () => {
  const [value, setValue] = useState<string>('');

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    // отправка сообщения

    setValue('');
  };

  return (
    <>
      {/* {user ?
        <form className={s.formMessage} onSubmit={onSubmitHandler}>
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <Button className={s.buttonSend}>Отправить</Button>
        </form>
        :
        <Invitation className={s.invitation} path="/login" text="Отправка сообщений доступна только авторизованным пользователям. ">
          Авторизоваться
        </Invitation>} */}
    </>
  )
};

export default FormMessage;