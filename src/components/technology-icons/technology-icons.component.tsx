import React from 'react';

import {
  TECHNOLOGY_ICONS,
  ITechnologyIcon,
} from 'components/technology-icons/technology-icons.icons';

export default function TechnologyIcons() {
  return (
    <div className='c-technology-icons__wrapper'>
      {TECHNOLOGY_ICONS.map(({ icon, alt }: ITechnologyIcon, index: number) => (
        <img
          alt={alt}
          className='c-technology-icons__icon'
          key={`technology-icons=${index}`}
          src={icon}
        />
      ))}
    </div>
  );
}
