import React from 'react';

import Header from 'components/header/header.component';

interface ILayout {
  children: React.ReactElement | React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div className='c-layout'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
