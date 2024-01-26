import { IProjectTag } from 'types/projects';

interface ITechnologyIcons {
  projectTags: IProjectTag[];
}

export default function TechnologyIcons({ projectTags }: ITechnologyIcons) {
  return (
    <div className='flex flex-wrap justify-center mt-24 mx-auto max-w-xl lg:mt-0 lg:mx-0'>
      {projectTags.map(({ iconUrl, tag }, index: number) => (
        <div
          className='p-2 md:p-4 lg:p-8 duration-200 transition-transform hover:scale-125'
          key={`technology-icon-${index}`}
        >
          <div
            className='h-8 w-8 md:w-12 md:h-12'
            role='img'
            style={{
              backgroundImage: `url(${iconUrl})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
            }}
            title={tag}
          />
        </div>
      ))}
    </div>
  );
}
