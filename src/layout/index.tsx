import type { FC } from 'react';
import AppBar from '@/layout/AppBar';
import Footer from '@/layout/Footer';
import Content from '@/layout/Content';

const Layout: FC = () => {
  return (
    <div
      className={'flex flex-col w-screen max-h-screen min-h-screen h-screen'}
    >
      <AppBar />
      <div className={'w-full flex-1 overflow-y-auto'}>
        <Content />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
