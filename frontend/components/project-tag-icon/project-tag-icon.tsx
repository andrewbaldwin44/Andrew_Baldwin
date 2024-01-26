import cx from 'classnames';

import { IProjectTag } from 'types/projects';

interface IProjectTagIcon extends Pick<IProjectTag, 'iconUrl' | 'tag'> {
  size?: 'small' | 'default';
}

export default function ProjectTagIcon({ iconUrl, tag, size = 'default' }: IProjectTagIcon) {
  const containerClasses = cx('duration-200 transition-transform hover:scale-125', {
    'p-2 md:p-4 lg:p-8': size === 'default',
    'p-2': size === 'small',
  });

  const iconClasses = cx({
    'h-8 w-8 md:w-12 md:h-12': size === 'default',
    'h-8 w-8': size === 'small',
  });

  return (
    <div className={containerClasses}>
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
