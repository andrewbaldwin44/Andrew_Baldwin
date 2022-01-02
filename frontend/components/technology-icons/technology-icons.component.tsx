import { TECHNOLOGY_ICONS } from 'components/technology-icons/technology-icons.icons';

export default function TechnologyIcons() {
  return (
    <div className='flex flex-wrap justify-center gap-6 mt-24 mx-auto max-w-lg lg:mt-0 lg:mx-0 md:gap-10 lg:gap-16'>
      {TECHNOLOGY_ICONS.map((TechnologyIcon, index: number) => (
        <TechnologyIcon key={`technology-icon-${index}`} className='h-8 w-8 md:w-12 md:h-12' />
      ))}
    </div>
  );
}
