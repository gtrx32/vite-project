import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState } from 'react';
import { db } from '../../../../firebase/initFirebase';
import s from './FormMessage.module.scss';
import { useUser } from '../../../hooks/useUser';
import Invitation from '../../UI/Invitation';
import Button from '../../UI/Button';

interface FormMessageProps {
}

const FormMessage: React.FC<FormMessageProps> = () => {
  const [value, setValue] = useState<string>('');
  const user = useUser();

  const onSubmitHandler = async (event: React.FormEvent) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, 'messages'), {
      email: user?.email,
      name: user?.displayName,
      text: value,
      timestamp: serverTimestamp()
    });

    setValue('');
  };

  return (
    <>
      {user ?
        <form className={s.formMessage} onSubmit={onSubmitHandler}>
          <textarea value={value} onChange={(e) => setValue(e.target.value)} />
          <Button className={s.buttonSend}>Отправить</Button>
        </form>
        :
        <Invitation className={s.invitation} path="/login" text="Отправка сообщений доступна только авторизованным пользователям. ">
          Авторизоваться
        </Invitation>}
    </>
  )
};

export default FormMessage;