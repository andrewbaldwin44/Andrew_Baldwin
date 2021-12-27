import { TECHNOLOGY_ICONS } from 'components/technology-icons/technology-icons.icons';

export default function TechnologyIcons() {
  return (
    <div className='flex flex-wrap gap-6 mt-24'>
      {TECHNOLOGY_ICONS.map((TechnologyIcon, index: number) => (
        <TechnologyIcon key={`technology-icon-${index}`} className='h-8 w-8' />
      ))}
    </div>
  );
}
