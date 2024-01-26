import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { IProject } from 'types/projects';

interface IUseFilterProjects {
  projects: IProject[];
}

export default function useFilterProjects({ projects }: IUseFilterProjects) {
  const [projectsToDisplay, setProjectsToDisplay] = useState(projects);

  const { query } = useRouter();

  const appliedFilters = query && query.filters;

  useEffect(() => {
    if (appliedFilters) {
      setProjectsToDisplay(
        projects.filter(
          ({ tags }) =>
            tags &&
            tags.some(({ projectTagId }) =>
              Array.isArray(appliedFilters)
                ? appliedFilters.includes(projectTagId)
                : appliedFilters === projectTagId,
            ),
        ),
      );
    } else {
      // reset
      setProjectsToDisplay(projects);
    }
  }, [projects, appliedFilters]);

  return { projectsToDisplay };
}
