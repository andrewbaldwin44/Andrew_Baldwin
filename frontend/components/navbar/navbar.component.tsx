import React, { createRef, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import cx from 'classnames';

import HamburgerMenu from 'assets/hamburger-menu';
import DarkLightToggle from 'components/navbar/dark-light-toggle.component';
import LanguageToggle from 'components/navbar/language-toggle.component';
import useStickyElement from 'hooks/use-sticky-element';
import useOnClickOutside from 'hooks/use-on-click-outside';
import { useTranslations } from 'hooks/use-translations';
import styles from 'components/navbar/navbar.module.css';

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

export default function Navbar() {
  const { getTranslations } = useTranslations();

  const navElement: React.RefObject<HTMLElement> = createRef();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimatingOut, setIsAnimatingOut] = useState(false);

  useOnClickOutside(navElement, () => setIsAnimatingOut(true), { shouldAddListeners: isMenuOpen });

  const [isNavbarSticky, navbarStickyTrigger] = useStickyElement();

  const onAnimationEnd = () => {
    if (isAnimatingOut) {
      setIsAnimatingOut(false);
      setIsMenuOpen(false);
    }
  };

  const navbarClasses = cx('shadow-md bg-white dark:bg-gray-900', {
    [styles.navbarIsSticky]: isNavbarSticky,
    'sticky top-0 z-10 text-sm': isNavbarSticky,
  });

  const navLinkWrapperClasses = cx(
    styles.navlinks,
    'flex md:gap-x-6 md:flex md:static md:flex-row md:shadow-none md:w-min md:p-0 md:items-center lg:gap-x-14',
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
      <div
        className={styles.stickyTrigger}
        ref={navbarStickyTrigger as React.RefObject<HTMLDivElement>}
      />
      {isMenuOpen && !isAnimatingOut && <Dimmer />}
      <nav className={navbarClasses} ref={navElement}>
        <div
          className='navbar-links-wrapper container mx-auto flex justify-between items-center gap-x-2 p-3'
          style={{ height: 'var(--navbar-height)' }}
        >
          <Link passHref href='/'>
            <div className='flex cursor-pointer'>
              <Image
                alt='Logo'
                src='/logo.png'
                loading='eager'
                layout='fixed'
                width={isNavbarSticky ? 30 : 40}
                height={isNavbarSticky ? 30 : 40}
              />
            </div>
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} type='button'>
            <HamburgerMenu className='md:hidden dark:text-gray-100' height='32' />
          </button>
          <ul className={navLinkWrapperClasses} onAnimationEnd={onAnimationEnd}>
            {isMenuOpen && !isAnimatingOut && (
              <li className={mobileMenuCloseClasses}>
                <button
                  className='text-3xl text-red'
                  onClick={() => setIsAnimatingOut(true)}
                  type='button'
                >
                  &#120;
                </button>
              </li>
            )}
            {getTranslations('navbar.navlinks').map(
              ({ href, text }: { href: string; text: string }, index: number) => (
                <li key={`navlink-${index}`} className={navLinkListItemClasses}>
                  <NavLink href={href}>{text}</NavLink>
                </li>
              ),
            )}
            <li className='hidden md:block w-0.5 h-6 bg-black-500 dark:bg-gray-300' />
            <li className='flex gap-x-6 lg:gap-x-10'>
              <LanguageToggle />
              <div className='border-black-500 dark:border-gray-300 border-l md:hidden' />
              <DarkLightToggle />
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
