import { FC } from 'react';
import Head from 'next/head';
import { Header } from '@/components/ui';

type LayoutProps = {
  title?: string;
};

const Layout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title ? `${title} - Store` : 'Store'}</title>
      </Head>
      <Header />
      <main className="p-3">{children}</main>
    </div>
  );
};

export default Layout;
