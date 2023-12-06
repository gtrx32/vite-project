import s from './Message.module.scss';
import clsx from 'clsx';

interface MessageProps {
  name: string;
  text: string;
  datetime: string;
  isCurrentUser?: boolean;
}

const Message: React.FC<MessageProps> = ({ name, text, datetime, isCurrentUser }) => {
  return (
    <div className={clsx(s.message, isCurrentUser ? s.message_mine : s.message_other)}>
      <div className={s.message__username}>{name}</div>
      <div className={s.message__text}>{text}</div>
      <div className={s.message__datetime}>{datetime}</div>
    </div>
  );
};

export default Message;
