import { Timestamp } from 'firebase/firestore';
import s from './Message.module.scss';
import clsx from 'clsx';

interface MessageProps {
  email: string;
  userEmail: string | null | undefined;
  name: string;
  text: string;
  datetime: Timestamp;
}

const Message: React.FC<MessageProps> = ({ email, userEmail, name, text, datetime }) => {
  const format = (timestamp: Timestamp | null | undefined, isTime: boolean) => {
    if (!timestamp) {
      return 'Invalid Timestamp';
    }
    const datetime = new Date(timestamp.seconds * 1000);
    if (isTime) return datetime.toLocaleDateString();
    else return datetime.toLocaleTimeString()
  };

  return (
    <div className={clsx(s.message, email === userEmail ? s.message_mine : s.message_other)}>
      <div className={s.message__username}>{name}</div>
      <div className={s.message__text}>{text}</div>
      <div className={s.message__datetime}>
        {format(datetime, false)} | {format(datetime, true)}
      </div>
    </div>
  )
};

export default Message;