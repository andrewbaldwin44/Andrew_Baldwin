import GithubIcon from 'assets/github';
import LinkIcon from 'assets/link';
import ProjectTagIcon from 'components/project-tag-icon/project-tag-icon';
import { IProject } from 'types/projects';

interface IProjects {
  projects: IProject[];
}

export default function Projects({ projects }: IProjects) {
  return (
    <div className='flex flex-wrap md:grid grid-cols-2 lg:grid-cols-3 gap-x-10'>
      {projects.map(
        ({ title, imageUrl, githubLink, demoLink, description, tags }, index: number) => (
          <div
            className='w-full max-h-full my-10 border border-gray-300 shadow-lg rounded pb-6 lg:flex lg:flex-col'
            key={`project-${index}`}
          >
            <div
              className='w-full min-w-full h-52 lg:h-80 bg-cover bg-no-repeat bg-center rounded-t'
              style={{ backgroundImage: `url("${imageUrl}")` }}
            />
            <div className='px-6 py-4 lg:px-8 xl:px-14 lg:flex lg:flex-col lg:flex-1 lg:justify-between'>
              <div>
                <h2 className='text-xl h-16 flex items-center font-bold dark:text-gray-100'>
                  {title}
                </h2>
                <p className='mb-6 lg:mb-8 xl:mb-10 md:text-justify dark:text-gray-400'>
                  {description}
                </p>
              </div>

              <div>
                <div className='flex flex-wrap justify-center mb-8'>
                  {tags &&
                    tags.map(({ projectTagId, ...props }) => (
                      <ProjectTagIcon
                        key={`project-tags-${projectTagId}`}
                        size='small'
                        {...props}
                      />
                    ))}
                </div>

                <div className='flex justify-between'>
                  {demoLink && (
                    <a
                      className='w-32 border border-black flex items-center px-2 dark:text-gray-100 dark:border-gray-600'
                      href={demoLink}
                      rel='noreferrer'
                      target='_blank'
                    >
                      <LinkIcon className='w-8 h-8' />
                      <span className='w-full font-medium text-center dark:text-gray-100'>
                        Demo
                      </span>
                    </a>
                  )}
                  {githubLink && (
                    <a
                      className='w-32 border border-black flex items-center dark:bg-gray-700'
                      href={githubLink}
                    >
                      <GithubIcon className='w-8 h-8 mx-1 text-black-600 dark:text-gray-100' />
                      <span className='text-white bg-black w-full font-medium p-2 text-center'>
                        GitHub
                      </span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
}
