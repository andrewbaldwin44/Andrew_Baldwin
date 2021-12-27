import React from 'react';

import { IAsset } from 'assets/types';

function HamburgerMenu({ className }: IAsset) {
  return (
    <svg
      className={className}
      fill='none'
      stroke='currentColor'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M4 6h16M4 12h16M4 18h16'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
      />
    </svg>
  );
}

export default HamburgerMenu;
