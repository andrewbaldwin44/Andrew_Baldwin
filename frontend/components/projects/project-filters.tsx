import { useRef, useState } from 'react';
import cx from 'classnames';
import { NextRouter, useRouter } from 'next/router';

import FilterIcon from 'assets/filter';
import useOnClickOutside from 'hooks/use-on-click-outside';
import { useTranslations } from 'hooks/use-translations';
import { IProjectTag } from 'types/projects';

interface IProjectFilters {
  projectTags: IProjectTag[];
}

const getAppliedFiltersFromQuery = ({ query }: NextRouter) => {
  const filters = query.filters;

  if (!filters) {
    return [];
  }

  return Array.isArray(filters) ? filters : [filters];
};

export default function ProjectFilters({ projectTags }: IProjectFilters) {
  const { getTranslations } = useTranslations();

  const Router = useRouter();

  const appliedFilters = getAppliedFiltersFromQuery(Router);

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);

  const filterMenuContainer: React.RefObject<HTMLDivElement> = useRef(null);

  const filterMenuClasses = cx(
    'absolute flex flex-col gap-y-4 py-6 px-12 bg-white dark:bg-gray-900 rounded-lg shadow-lg top-12 right-0 border border-black',
    {
      block: isFilterMenuOpen,
      hidden: !isFilterMenuOpen,
    },
  );

  useOnClickOutside(filterMenuContainer, () => setIsFilterMenuOpen(false), {
    shouldAddListeners: isFilterMenuOpen,
  });

  const onToggleFilter = (filter: string) => {
    const newAppliedFilters = appliedFilters.includes(filter)
      ? appliedFilters.filter(f => filter !== f)
      : [...appliedFilters, filter];

    Router.push({
      query: { filters: newAppliedFilters },
    });
  };

  const clearFilters = () => {
    Router.push({
      query: '',
    });
  };

  return (
    <div className='flex justify-end gap-x-6' ref={filterMenuContainer}>
      <button className='link whitespace-nowrap' onClick={clearFilters}>
        {getTranslations('projectsPage.clearFilters')}
      </button>
      <div className='relative w-8'>
        <button onClick={() => setIsFilterMenuOpen(!isFilterMenuOpen)}>
          <FilterIcon
            className='h-8 w-8 dark:text-white'
            title={getTranslations('projectsPage.filters')}
          />
        </button>

        <div className={filterMenuClasses}>
          {projectTags.map(({ tag, projectTagId }) => (
            <div className='relative' key={`project-filter-${projectTagId}`}>
              <label className='checkbox flex gap-x-4 dark:text-white whitespace-nowrap'>
                <input
                  checked={appliedFilters.includes(projectTagId)}
                  onChange={() => onToggleFilter(projectTagId)}
                  type='checkbox'
                />
                {tag}
                <span className='checkmark'></span>
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
