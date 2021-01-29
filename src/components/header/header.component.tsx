import React, { useCallback, useState } from 'react';
import { Link } from 'gatsby';
import cx from 'classnames';

import Image from 'components/image';
import HamburgerMenu from 'components/hamburger-menu';

const NavLinkUnderline = () => <div className='c-nav__link-underline' />;

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
        <HamburgerMenu
          className='c-nav__mobile-menu__burger'
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        />
        <ul className='nav-links'>
          <li className='c-nav__mobile-menu__close'>
            <button onClick={() => setIsMenuOpen(false)} type='button'>
              X
            </button>
          </li>
          <li>
            <Link activeClassName='c-nav__active-nav-link' to='/'>
              About
            </Link>
            <NavLinkUnderline />
          </li>
          <li>
            <Link activeClassName='c-nav__active-nav-link' to='/projects'>
              Projects
            </Link>
            <NavLinkUnderline />
          </li>
          <li>
            <Link activeClassName='c-nav__active-nav-link' to='/testimonials'>
              Testimonials
            </Link>
            <NavLinkUnderline />
          </li>
          <li>
            <Link activeClassName='c-nav__active-nav-link' to='/contact'>
              Contact
            </Link>
            <NavLinkUnderline />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
