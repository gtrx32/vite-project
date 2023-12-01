import { query, collection, orderBy, onSnapshot, DocumentSnapshot } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../../../firebase/initFirebase';
import { useUser } from '../../../hooks/useUser';
import { message } from '../types';
import s from './MessagesList.module.scss';
import Message from './Message';

interface MessagesListProps { }

const MessagesList: React.FC<MessagesListProps> = () => {
  const [messages, setMessages] = useState<message[]>([]);
  const user = useUser();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: message[] = [];
      querySnapshot.forEach((doc: DocumentSnapshot) => {
        messagesData.push({ id: doc.id, data: doc });
      });
      setMessages(messagesData);
    });

    return () => { unsubscribe(); };
  }, []);

  return (
    <div className={s.chat__messages}>
      {messages.map((message) => {
        const data = message.data?.data();
        return (
          <Message
            key={message.id}
            email={data?.email}
            userEmail={user?.email}
            name={data?.name}
            text={data?.text}
            datetime={data?.timestamp}
          />
        )
      })}
    </div>
  )
};

export default MessagesList;