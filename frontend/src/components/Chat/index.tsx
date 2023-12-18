import s from './Chat.module.scss';
import FormMessage from './FormMessage';
import MessagesList from './MessagesList';
const Chat = () => {
  return (
    <div className={s.chat}>
      <MessagesList />
      <FormMessage />
    </div>
  );
};

export default Chat;
