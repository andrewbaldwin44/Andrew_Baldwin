import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/header/header.component';

interface ILayout {
  children: React.ReactElement[];
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
