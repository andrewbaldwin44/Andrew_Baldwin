import React, { createRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import cx from 'classnames';

import HamburgerMenu from 'assets/hamburger-menu';
import DarkLightToggle from 'components/header/dark-light-toggle.component';
import useOnClickOutside from 'hooks/use-on-click-outside';
import styles from 'components/header/header.module.css';

interface INavLink {
  children: React.ReactChild;
  href: string;
}

function NavLink({ children, href }: INavLink) {
  const router = useRouter();

  const NavLinkUnderline = (
    <div className='absolute nav-link-underline w-full h-0.5 mt-1 bg-red rounded-sm' />
  );

  return (
    <div className='w-content relative'>
      <Link href={href}>
        <a>{children}</a>
      </Link>
      {router.pathname === href && NavLinkUnderline}
    </div>
  );
}

function Dimmer() {
  return <div className='absolute w-screen h-screen bg-black05 md:hidden z-10' />;
}

export default function Header() {
  const navElement: React.RefObject<HTMLElement> = createRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useOnClickOutside(navElement, () => setIsAnimatingOut(true), { shouldAddListeners: isMenuOpen });

  const onAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsAnimatingOut(false);
      setIsMenuOpen(false);
    }
  };

  const navLinkWrapperClasses = cx(
    styles.navlinks,
    'flex gap-x-16 md:flex md:static md:flex-row md:shadow-none md:w-min md:p-0 md:items-center',
    {
      [styles.animateNavLinksOut]: isAnimatingOut,
      hidden: !isMenuOpen,
      'relative z-50 h-screen bg-white top-0 right-0 h-full w-64 px-8 py-16 gap-y-8 shadow-lg flex flex-col dark:bg-gray-900':
        isMenuOpen,
    },
  );

  const mobileMenuCloseClasses = cx('md:hidden', {
    'block absolute top-2 right-4': isMenuOpen,
    hidden: !isMenuOpen,
  });

  const navLinkListItemClasses = cx('relative dark:text-gray-100', {
    'w-content': !isMenuOpen,
    'border-b border-gray-300 pb-6': isMenuOpen,
  });

  return (
    <>
      {isMenuOpen && !isAnimatingOut && <Dimmer />}
      <nav className='shadow-md bg-white dark:bg-gray-900' ref={navElement}>
        <div
          className='container mx-auto flex justify-between items-center gap-x-2 p-3'
          style={{ height: 'var(--navbar-height)' }}
        >
          <Link passHref href='/'>
            <div className='flex cursor-pointer'>
              <Image
                alt='Logo'
                src='/logo.png'
                loading='eager'
                layout='fixed'
                width={40}
                height={40}
              />
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type='button'>
            <HamburgerMenu className='md:hidden dark:text-gray-100' height='32' />
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
            <li className={navLinkListItemClasses}>
              <NavLink href='/projects'>Projects</NavLink>
            </li>
            <li className={navLinkListItemClasses}>
              <NavLink href='/testimonials'>Testimonials</NavLink>
            </li>
            <li className={navLinkListItemClasses}>
              <NavLink href='/contact'>Contact</NavLink>
            </li>
            <DarkLightToggle />
          </ul>
        </div>
      </nav>
    </>
  );
}
