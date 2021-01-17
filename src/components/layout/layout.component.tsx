import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Header from 'components/header/header.component';

interface ILayout {
  children: React.ReactElement[];
}

const Layout = ({ children }: ILayout) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || 'Title'} />
      <div className='c-layout'>
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
