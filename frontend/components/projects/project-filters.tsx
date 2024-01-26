import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

import FilterIcon from 'assets/filter';
import useOnClickOutside from 'hooks/use-on-click-outside';
import { useTranslations } from 'hooks/use-translations';
import { IProjectTag } from 'types/projects';

interface IProjectFilters {
  projectTags: IProjectTag[];
}

export default function ProjectFilters({ projectTags }: IProjectFilters) {
  const { getTranslations } = useTranslations();

  const Router = useRouter();

  const filtersFromQuery = Router.query && Router.query.filters;

  const [isFilterMenuOpen, setIsFilterMenuOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState<string[]>([]);

  const filterMenuContainer: React.RefObject<HTMLDivElement> = useRef(null);

  useOnClickOutside(filterMenuContainer, () => setIsFilterMenuOpen(false), {
    shouldAddListeners: isFilterMenuOpen,
  });

  useEffect(() => {
    if (filtersFromQuery && !appliedFilters.length) {
      setAppliedFilters(Array.isArray(filtersFromQuery) ? filtersFromQuery : [filtersFromQuery]);
    }
  }, [filtersFromQuery, appliedFilters]);

  const onToggleFilter = (filter: string) => {
    const newAppliedFilters = appliedFilters.includes(filter)
      ? appliedFilters.filter(f => filter !== f)
      : [...appliedFilters, filter];

    Router.push({
      pathname: '/projects',
      query: { filters: newAppliedFilters },
    });

    setAppliedFilters(newAppliedFilters);
  };

  const clearFilters = () => {
    Router.push({
      pathname: '/projects',
    });

    setAppliedFilters([]);
  };

  return (
    <div className='flex justify-between w-40 ml-auto' ref={filterMenuContainer}>
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
        {isFilterMenuOpen && (
          <div className='absolute flex flex-col gap-y-4 py-6 px-12 bg-gray-900 rounded-lg shadow-lg top-12 right-0 border border-black'>
            {projectTags.map(({ tag, projectTagId }) => (
              <div className='relative' key={`project-filter-${projectTagId}`}>
                <label className='checkbox flex gap-x-4 dark:text-white whitespace-nowrap'>
                  <input
                    defaultChecked={appliedFilters.includes(projectTagId)}
                    onClick={() => onToggleFilter(projectTagId)}
                    type='checkbox'
                  />
                  {tag}
                  <span className='checkmark'></span>
                </label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
