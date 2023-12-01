import s from './Chat.module.scss';
import Heading from '../UI/Heading';
import FormMessage from './FormMessage';
import MessagesList from './MessagesList';

interface ChatProps { }

const Chat: React.FC<ChatProps> = () => {
  return (
    <div className={s.chat}>
      <Heading>Чат</Heading>
      <MessagesList />
      <FormMessage />
    </div>
  );
};

export default Chat;