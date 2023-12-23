import Chat from '../../components/Chat';
import MainContainer from '../../components/MainContainer';

const ChatPage = () => {
  document.title = 'Чат';

  return (
    <MainContainer>
      <Chat />
    </MainContainer>
  );
};

export default ChatPage;
