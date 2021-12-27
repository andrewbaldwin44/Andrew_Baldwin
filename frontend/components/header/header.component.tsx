import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import cx from 'classnames';

import HamburgerMenu from 'assets/hamburger-menu';
import 'components/header/header.module.css';

const NavLinkUnderline = () => (
  <div className='absolute nav-link-underline w-full h-0.5 mt-1 bg-red rounded-sm hidden' />
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  const onAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsAnimatingOut(false);
      setIsMenuOpen(false);
    }
  };

  const navLinkWrapperClasses = cx(
    'navlinks flex gap-x-16 md:flex md:static md:flex-row md:shadow-none md:w-min md:p-0 md:items-center',
    {
      'animate-navlinks-out': isAnimatingOut,
      hidden: !isMenuOpen,
      'absolute top-0 right-0 h-full w-48 px-6 py-10 gap-y-8 shadow-md bg-white flex flex-col':
        isMenuOpen,
    },
  );

  const mobileMenuCloseClasses = cx('md:hidden', {
    'block absolute top-2 right-4': isMenuOpen,
    hidden: !isMenuOpen,
  });

  return (
    <nav className='shadow-md mb-8'>
      <div className='container mx-auto flex justify-between items-center gap-x-2 p-3'>
        <Link passHref href='/'>
          <Image alt='Logo' src='/logo.png' loading='eager' layout='fixed' width={40} height={40} />
        </Link>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} type='button'>
          <HamburgerMenu className='md:hidden w-6' />
        </button>
        <ul className={navLinkWrapperClasses} onAnimationEnd={onAnimationEnd}>
          <li className={mobileMenuCloseClasses}>
            <button
              className='text-3xl text-red'
              onClick={() => setIsAnimatingOut(true)}
              type='button'
            >
              &#120;
            </button>
          </li>
          <li className='w-content relative'>
            <Link href='/'>About</Link>
            <NavLinkUnderline />
          </li>
          <li className='w-content relative'>
            <Link href='/projects'>Projects</Link>
            <NavLinkUnderline />
          </li>
          <li className='w-content relative'>
            <Link href='/testimonials'>Testimonials</Link>
            <NavLinkUnderline />
          </li>
          <li className='w-content relative'>
            <Link href='/contact'>Contact</Link>
            <NavLinkUnderline />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
