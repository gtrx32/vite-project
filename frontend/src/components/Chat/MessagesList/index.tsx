import { useState, useEffect } from 'react';
import { message } from '../types';
import s from './MessagesList.module.scss';
import Message from './Message';

interface MessagesListProps {}

const MessagesList: React.FC<MessagesListProps> = () => {
  const [messages, setMessages] = useState<message[]>([]);

  useEffect(() => {}, []);

  return (
    <div className={s.chat__messages}>
      {messages.map(() => {
        return (
          <div className={s['']}></div>
          // <Message
          //   key={message.id}
          //   email={data?.email}
          //   userEmail={user?.email}
          //   name={data?.name}
          //   text={data?.text}
          //   datetime={data?.timestamp}
          // />
        );
      })}
    </div>
  );
};

export default MessagesList;
