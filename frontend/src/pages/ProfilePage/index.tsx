import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import axios from 'axios';
import { useStateContext } from '../../context/ContextProvider';

const ProfilePage = () => {
  const { user, setAvatar } = useStateContext();
  document.title = 'Профиль';
  const [avatarValue, setAvatarValue] = useState('');

  const onHandleChange = async () => {
    if (user?.email) {
      await axios
        .post(
          'http://127.0.0.1:8000/api/userAvatar',
          { email: user?.email, avatar: avatarValue },
          {
            headers: { 'Content-Type': 'application/json' },
          }
        )
        .then(() => {
          setAvatar(avatarValue);
        });
    }
  };

  return (
    <MainContainer>
      <div>
        <input type='text' placeholder='avatar' onChange={event => setAvatarValue(event.target.value)} value={avatarValue} />
        <button onClick={onHandleChange}>update avatar</button>
        <img loading='lazy' src={user?.avatar} width='200' alt='' />
      </div>
    </MainContainer>
  );
};
export default ProfilePage;
