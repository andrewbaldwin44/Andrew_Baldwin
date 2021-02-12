import React from 'react';

import { TECHNOLOGY_ICONS } from 'components/technology-icons/technology-icons.icons';

export default function TechnologyIcons() {
  return (
    <div className='c-technology-icons__wrapper'>
      {TECHNOLOGY_ICONS.map((TechnologyIcon, index: number) => (
        <TechnologyIcon key={`technology-icon-${index}`} />
      ))}
    </div>
  );
}
