/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useState } from 'react';
import { useCookies } from 'react-cookie';

const StateContext = createContext({
  user: {
    name: '',
    email: '',
    avatar: '',
    phone: '',
  },
  notification: '',
  token: '',
  setToken: (token: string) => {},
  setNotification: (message: string) => {},
  setUser: (user: any) => {},
  setAvatar: (avatar: string) => {},
  setPhone: (phone: string) => {},
});

export const ContextProvider = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(['ACCESS_TOKEN']);
  const [user, setUser] = useState({
    name: '',
    email: '',
    avatar: '',
    phone: '',
  });
  const [token, _setToken] = useState(cookies.ACCESS_TOKEN ?? '');
  const [notification, _setNotification] = useState('');
  const setToken = (token: string) => {
    _setToken(token);
    if (token) {
      /**
       * Set Cookie with 60 * 60 * 24 = 86400 seconds = 1 day
       */
      localStorage.setItem('ACCESS_TOKEN', token);
      setCookie('ACCESS_TOKEN', token, { path: '/', maxAge: 60 * 60 * 24 * 30 });
    } else {
      localStorage.removeItem('ACCESS_TOKEN');
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

  const setPhone = (phone: string) => {
    setUser({
      ...user,
      phone,
    });
  }

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
        setPhone
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
