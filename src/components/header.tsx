import React from 'react';
import { Link } from 'gatsby';

interface IHeader {
  siteTitle: string;
};

const Header = ({ siteTitle = '' }: IHeader) => (
  <header
    style={{
      background: 'rebeccapurple',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
          to='/'
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

export default Header;
