import React, { useState } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import Image from 'components/image';
import HamburgerMenu from 'components/hamburger-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarClasses = cx('c-nav', {
    'c-nav__mobile': isMenuOpen,
  });

  return (
    <header>
      <nav className={navbarClasses}>
        <Link to='/'>
          <Image />
        </Link>
        <HamburgerMenu className='c-nav__mobile-menu' onClick={() => setIsMenuOpen(!isMenuOpen)} />
        <ul className='nav-links'>
          <li>
            <Link to='/'>About</Link>
          </li>
          <li>
            <Link to='/projects'>Projects</Link>
          </li>
          <li>
            <Link to='/testimonials'>Testimonials</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
