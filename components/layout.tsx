import React, { ReactNode } from 'react';
import Nav from './nav';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <React.Fragment>
      <header>
        <Nav />
      </header>
      <main style={{ maxWidth: '800px', margin: '4rem auto' }}>{children}</main>
      <footer
        style={{ border: '2px solid #eee', marginTop: '8rem', padding: '2rem' }}
      >
        Apollo Cache Rehydration Demo
      </footer>
    </React.Fragment>
  );
};

export default Layout;
