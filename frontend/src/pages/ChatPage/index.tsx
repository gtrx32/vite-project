import Chat from '../../components/Chat';
import MainContainer from '../../components/MainContainer';
import s from './ChatPage.module.scss';

const ChatPage = () => {
  document.title = 'Чат';

  return (
    <MainContainer>
      <Chat />
    </MainContainer>
  );
};

export default ChatPage;
