import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import { axiosClient } from '../../api/client';

import s from './ProfilePage.module.scss';

const ProfilePage = () => {
  const { user, setAvatar, setPhone } = useStateContext();
  document.title = 'Профиль';
  const [avatarValue, setAvatarValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');

  const onHandleChangeAvatar = async () => {
    if (user?.email) {
      axiosClient.post('/userAvatar', { email: user?.email, avatar: avatarValue }).then(() => {
        setAvatar(avatarValue);
      });
    }
  };

  const onHandleChangePhone = async () => {
    if (user?.email) {
      axiosClient.post('/userPhone', { email: user?.email, phone: phoneValue }).then(() => {
        setPhone(phoneValue);
      });
    }
  };

  return (
    <MainContainer className={s.mainContainer}>
      <div>{user.email}</div>
      <div>{user.name}</div>
      <div>
        <input type='text' placeholder='avatar' onChange={event => setAvatarValue(event.target.value)} value={avatarValue} />
        <button onClick={onHandleChangeAvatar}>update avatar</button>
        <img loading='lazy' src={user?.avatar} width='200' alt='' />
      </div>
      <div>
        <input type='tel' placeholder='avatar' onChange={event => setPhoneValue(event.target.value)} value={phoneValue} />
        <button onClick={onHandleChangePhone}>update phone</button>
      </div>
    </MainContainer>
  );
};
export default ProfilePage;
