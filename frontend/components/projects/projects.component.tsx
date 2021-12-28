import GithubIcon from 'assets/github';
import LinkIcon from 'assets/link';
import colors from 'tailwindcss/colors';

interface IProject {
  demoLink: string;
  description: string;
  githubLink: string;
  imageUrl: string;
  title: string;
}

export interface IProjects {
  projects: IProject[];
}

export default function Projects({ projects }: IProjects) {
  return (
    <div className='flex flex-wrap lg:grid grid-cols-3 gap-x-10'>
      {projects.map(({ title, imageUrl, githubLink, demoLink, description }, index: number) => (
        <div
          key={`project-${index}`}
          className='w-full max-h-full my-10 border border-gray-300 shadow-lg rounded pb-6 lg:flex lg:flex-col'
        >
          <div
            style={{ backgroundImage: `url("${imageUrl}")` }}
            className='w-full min-w-full h-96 bg-cover bg-no-repeat bg-center rounded-t'
          />
          <div className='px-6 py-4 md:px-14 lg:px-8 xl:px-14 lg:flex lg:flex-col lg:flex-1 lg:justify-between'>
            <div>
              <h2 className='text-xl h-16 flex items-center font-bold'>{title}</h2>
              <p className='mb-6 lg:mb-8 xl:mb-10 md:text-justify'>{description}</p>
            </div>

            <div className='flex justify-between'>
              <a className='w-32 border border-black flex items-center px-2' href={demoLink}>
                <LinkIcon className='w-8 h-8' />
                <span className='w-full font-medium text-center'>Demo</span>
              </a>
              <a className='w-32 border border-black flex items-center' href={githubLink}>
                <GithubIcon className='w-8 h-8 mx-1' />
                <span className='text-white bg-black w-full font-medium p-2 text-center'>
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
