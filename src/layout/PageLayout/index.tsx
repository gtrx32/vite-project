import { PropsWithChildren } from 'react';
import s from './PageLayout.module.scss';
import Header from '../elements/Header';
import Footer from '../elements/Footer';

interface PageLayoutProps extends PropsWithChildren { }

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className={s.wrapper}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default PageLayout;