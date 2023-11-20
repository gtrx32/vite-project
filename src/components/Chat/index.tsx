import { query, collection, orderBy, onSnapshot, DocumentSnapshot, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase/initFirebase';
import s from './Chat.module.scss';
import { useUser } from '../../hooks/useUser';
import { Message } from './types';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

interface ChatProps {
}

const Chat: React.FC<ChatProps> = () => {
  const [value, setValue] = useState<string>('');
  const [messages, setMessages] = useState<Message[]>([]);
  const user = useUser();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp', 'asc'));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData: Message[] = [];
      querySnapshot.forEach((doc: DocumentSnapshot) => {
        messagesData.push({ id: doc.id, data: doc });
      });
      setMessages(messagesData);
    });

    return () => { unsubscribe(); };
  }, []);

  const sendMessage = async (event: React.FormEvent) => {
    event.preventDefault();

    const docRef = await addDoc(collection(db, 'messages'), {
      email: user?.email,
      name: user?.displayName,
      text: value,
      timestamp: serverTimestamp()
    });

    setValue('');
  };

  const formatDate = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) {
      return 'Invalid Timestamp';
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString();
  };

  const formatTime = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) {
      return 'Invalid Timestamp';
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className={s.chat}>
      <h2>Чат</h2>
      <div className={s.chat__messages}>
        {messages.map((message) => (
          <div key={message.id} className={clsx(s.message, message.data?.data()?.email === user?.email ? s.message_mine : s.message_other)}>
            <div className={s.message__username}>{message.data?.data()?.name}</div>
            <div className={s.message__text}>{message.data?.data()?.text}</div>
            <div className={s.message__datetime}>
              {formatDate(message.data?.data()?.timestamp)} | {formatTime(message.data?.data()?.timestamp)}
            </div>
          </div>
        ))}
      </div>
      {user && <form onSubmit={sendMessage}>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Отправить</button>
      </form>}
      {!user && <p>Отправка сообщений доступна только авторизованным пользователям.
        <NavLink className={s.authlink} to="/login"> Авторизоваться</NavLink></p>}
    </div>
  );
};

export default Chat;