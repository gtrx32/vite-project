import Chat from '../../components/Chat';
import MainContainer from '../../components/MainContainer';
import s from './ChatPage.module.scss';

interface ChatPageProps {
}

const ChatPage: React.FC<ChatPageProps> = () => {
  return (
    <MainContainer className={s.chatContainer}>
      <Chat />
    </MainContainer>
  )
};

export default ChatPage;