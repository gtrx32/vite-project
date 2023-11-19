import Chat from '../../components/Chat';
import MainContainer from '../../components/MainContainer';
import s from './ChatPage.module.scss';

interface ChatPageProps {
}

const ChatPage: React.FC<ChatPageProps> = () => {
  return (
    <MainContainer>
      <Chat />
    </MainContainer>
  )
};

export default ChatPage;