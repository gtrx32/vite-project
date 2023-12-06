import { PropsWithChildren, useEffect } from 'react';
import s from './PageLayout.module.scss';
import Header from '../elements/Header';
import Footer from '../elements/Footer';
import { useStateContext } from '../../context/ContextProvider';
import { axiosClient } from '../../api/client';

interface PageLayoutProps extends PropsWithChildren {}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => {
  const { setUser } = useStateContext();

  useEffect(() => {
    axiosClient.get('/user').then(({ data }) => {
      setUser(data);
    });
  }, []);

  return (
    <div className={s.wrapper}>
      <Header />
      <main className={s.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default PageLayout;
