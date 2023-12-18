/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const StateContext = createContext({
  user: {
    name: '',
    email: '',
    avatar: '',
  },
  notification: '',
  token: '',
  setToken: (token: string) => {},
  setNotification: (message: string) => {},
  setUser: (user: any) => {},
  setAvatar: (avatar: string) => {},
});

export const ContextProvider = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(['ACCESS_TOKEN']);
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
  });
  const [token, _setToken] = useState(cookies.ACCESS_TOKEN ?? '');
  const [notification, _setNotification] = useState('');

  const setToken = (token: string) => {
    _setToken(token);
    if (token) {

      /**
       * Set Cookie with 60 * 60 * 24 = 86400 seconds = 1 day
      */
      setCookie('ACCESS_TOKEN', token, { path: '/', maxAge: 60 * 60 * 24 });
    } else {
      removeCookie('ACCESS_TOKEN');
    }
  };

  const setNotification = (message: string) => {
    _setNotification(message);

    setTimeout(() => {
      _setNotification('');
    }, 5000);
  };

  const setAvatar = (avatar: string) => {
    setUser({
      ...user,
      avatar,
    });
  };

  return (
    <StateContext.Provider
      value={{
        user,
        setUser,
        token,
        setToken,
        notification,
        setNotification,
        setAvatar,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
