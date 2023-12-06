import { useState, useEffect, useRef } from 'react';
import { message } from '../types';
import s from './MessagesList.module.scss';
import Message from './Message';
import { useStateContext } from '../../../context/ContextProvider';

interface MessagesListProps {}

const MessagesList: React.FC<MessagesListProps> = () => {
  const [messages, setMessages] = useState<message[]>([]);
  const { user } = useStateContext();
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const fetchData = async () => {
        const response = await fetch('http://127.0.0.1:8000/api/messages');
        const data = await response.json();
        setMessages(data);
      };

      fetchData();
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [messages]);

  return (
    <div className={s.chat__messages} ref={ref}>
      {messages.map(message => {
        return <Message isCurrentUser={message.userEmail === user?.email} key={message.id} name={message?.userName} text={message.text} datetime={message.date} />;
      })}
    </div>
  );
};

export default MessagesList;
