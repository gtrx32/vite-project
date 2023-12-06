import s from './Chat.module.scss';
import Heading from '../UI/Heading';
import FormMessage from './FormMessage';
import MessagesList from './MessagesList';
import { useNavigate } from 'react-router-dom';
import { useStateContext } from '../../context/ContextProvider';
import { useEffect } from 'react';

const Chat = () => {
  const { token } = useStateContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  if (!token) {
    return null;
  }

  return (
    <div className={s.chat}>
      <Heading>Чат</Heading>
      <MessagesList />
      <FormMessage />
    </div>
  );
};

export default Chat;
