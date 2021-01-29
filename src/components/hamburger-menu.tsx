import React from 'react';

interface IHamburgerMenu {
  className: string;
  onClick: () => void;
}

function HamburgerMenu({ className, onClick }: IHamburgerMenu) {
  return (
    <svg className={className} onClick={onClick} viewBox='0 0 100 60' width='35'>
      <g>
        <rect height='8' rx='4' width='100' />
        <rect height='8' rx='4' width='100' y='25' />
        <rect height='8' rx='4' width='100' y='50' />
      </g>
    </svg>
  );
}

export default HamburgerMenu;
