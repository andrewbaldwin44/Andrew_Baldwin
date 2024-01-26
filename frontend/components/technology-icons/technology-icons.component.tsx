import ProjectTagIcon from 'components/project-tag-icon/project-tag-icon';
import { IProjectTag } from 'types/projects';

interface ITechnologyIcons {
  projectTags: IProjectTag[];
}

export default function TechnologyIcons({ projectTags }: ITechnologyIcons) {
  return (
    <div className='flex flex-wrap justify-center mt-24 mx-auto max-w-xl lg:mt-0 lg:mx-0'>
      {projectTags.map(props => (
        <ProjectTagIcon key={`technology-icon-${props.projectTagId}`} {...props} />
      ))}
    </div>
  );
}
