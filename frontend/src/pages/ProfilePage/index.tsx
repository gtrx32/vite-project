import { useState } from 'react';
import MainContainer from '../../components/MainContainer';
import { useStateContext } from '../../context/ContextProvider';
import { axiosClient } from '../../api/client';

import s from './ProfilePage.module.scss';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';

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
      <div className={s.userdata}>
        <img loading='lazy' src={user?.avatar} width='200' alt='' />
        <div className={s.userdata__name}>{user.name}</div>
        <div className={s.userdata__email}>{user.email}</div>
        <div className={s.userdata__phone}>{user.phone}</div>
      </div>
      <div className={s.settings}>
        <div className={s.avatarsettings}>
          <Input type='text' placeholder='Аватар' onChange={event => setAvatarValue(event.target.value)} value={avatarValue} />
          <Button onClick={onHandleChangeAvatar}>Изменить</Button>
          {avatarError && <div className={s.error}>{avatarError}</div>}
        </div>
        <div className={s.phonesettings}>
          <Input type='tel' placeholder='Телефон' onChange={event => setPhoneValue(event.target.value)} value={phoneValue} />
          <Button onClick={onHandleChangePhone}>Изменить</Button>
          {phoneError && <div className={s.error}>{phoneError}</div>}
        </div>
      </div>
    </MainContainer>
  );
};
export default ProfilePage;
