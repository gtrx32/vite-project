import { query, collection, orderBy, onSnapshot, DocumentSnapshot, addDoc, serverTimestamp, Timestamp } from 'firebase/firestore';
import { useState, useEffect } from 'react';
import { db } from '../../../firebase/initFirebase';
import s from './Chat.module.scss';
import { useUser } from '../../hooks/useUser';
import { Message } from './types';

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

  const formatTimestamp = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) {
      return 'Invalid Timestamp';
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString();
  };

  const formatTimestamp2 = (timestamp: Timestamp | null | undefined) => {
    if (!timestamp) {
      return 'Invalid Timestamp';
    }
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleTimeString();
  };

  return (
    <div className={s.chat}>
      <div className={s.chatdiv}>
        {messages.map((message) => (
          <div key={message.id} className={message.data?.data()?.email === user?.email ? s.me : s.other}>
            <div className={s.username}><span>{message.data?.data()?.name}</span></div>
            <div className={s.text}><span>{message.data?.data()?.text}</span></div>
            <div className={s.datetime}>
              <span className={s.time}>{formatTimestamp2(message.data?.data()?.timestamp)}, </span>
              <span className={s.date}>{formatTimestamp(message.data?.data()?.timestamp)}</span>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};

export default Chat;