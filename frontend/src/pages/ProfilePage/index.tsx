import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import { axiosClient } from '../../api/client';

import s from './ProfilePage.module.scss';

const ProfilePage = () => {
  document.title = 'Профиль';
  const { user, setAvatar, setPhone } = useStateContext();
  const [avatarValue, setAvatarValue] = useState('');
  const [phoneValue, setPhoneValue] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [avatarError, setAvatarError] = useState('');

  if (!user.email) return null;

  const onHandleChangeAvatar = async () => {
    if (user?.email) {
      axiosClient
        .post('/userAvatar', { email: user?.email, avatar: avatarValue })
        .then(() => {
          setAvatar(avatarValue);
        })
        .catch(error => {
          setAvatarError(error.response.data.message);
        });
    }
  };

  const onHandleChangePhone = async () => {
    if (user?.email) {
      axiosClient
        .post('/userPhone', { email: user?.email, phone: phoneValue })
        .then(() => {
          setPhone(phoneValue);
        })
        .catch(error => {
          setPhoneError(error.response.data.message);
        });
    }
  };

  return (
    <MainContainer className={s.mainContainer}>
      <div>{user.email}</div>
      <div>{user.name}</div>
      <div>{user.phone}</div>
      <div>
        <input type='text' placeholder='avatar' onChange={event => setAvatarValue(event.target.value)} value={avatarValue} />
        <button onClick={onHandleChangeAvatar}>update avatar</button>
        {avatarError && <div className={s.error}>{avatarError}</div>}
        <img loading='lazy' src={user?.avatar} width='200' alt='' />
      </div>
      <div>
        <input type='tel' placeholder='avatar' onChange={event => setPhoneValue(event.target.value)} value={phoneValue} />
        <button onClick={onHandleChangePhone}>update phone</button>
        {phoneError && <div className={s.error}>{phoneError}</div>}
      </div>
    </MainContainer>
  );
};
export default ProfilePage;
