import React from 'react';
import { Link } from 'gatsby';

interface IHeader {
  siteTitle: string;
}

const Header = ({ siteTitle = '' }: IHeader) => (
  <header>
    <nav>
      <h1>
        <Link to='/'>{siteTitle}</Link>
      </h1>
    </nav>
  </header>
);

export default Header;
