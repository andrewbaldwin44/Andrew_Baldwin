import cx from 'classnames';
import { useRouter } from 'next/router';

import { IProjectTag } from 'types/projects';

interface IProjectTagIcon extends IProjectTag {
  size?: 'small' | 'default';
}

export default function ProjectTagIcon({
  iconUrl,
  projectTagId,
  tag,
  size = 'default',
}: IProjectTagIcon) {
  const Router = useRouter();

  const containerClasses = cx('duration-200 transition-transform hover:scale-125', {
    'p-2 md:p-4 lg:p-8': size === 'default',
    'p-2': size === 'small',
  });

  const iconClasses = cx({
    'h-8 w-8 md:w-12 md:h-12': size === 'default',
    'h-8 w-8': size === 'small',
  });

  const onIconClick = () =>
    Router.push({
      pathname: '/projects',
      query: { filters: projectTagId },
    });

  return (
    <div className={containerClasses} onClick={onIconClick} role='link'>
      <div
        className={iconClasses}
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
  );
}
