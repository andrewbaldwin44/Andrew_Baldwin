import { useCallback } from 'react';

import Layout from 'components/layout/layout.component';
import useLoadMorePage from 'components/load-more-button/hooks/use-load-more-page.hook';
import LoadMoreButton from 'components/load-more-button/load-more-button.component';
import ProjectFilters from 'components/projects/project-filters';
import Projects from 'components/projects/projects.component';
import SEO from 'components/seo';
import { PROJECTS_CONTROLLER } from 'externalRequest/controllers/projects';
import fetchProjects from 'externalRequest/projects';
import fetchProjectTags from 'externalRequest/projectTags';
import { Locale } from 'hooks/use-translations';
import { IProject, IProjectTag } from 'types/projects';

interface IProjectsPage {
  projects: IProject[];
  projectTags: IProjectTag[];
  paginationNumber: number;
  locale: Locale;
}

export default function ProjectsPage({
  locale,
  paginationNumber,
  projects,
  projectTags,
}: IProjectsPage) {
  const loadMoreCallback = useCallback(
    ({ paginationNumber }) => PROJECTS_CONTROLLER.get({ paginationNumber, locale }),
    [locale],
  );

  const { onLoadMore, isLoading, loadedTiles, currentPaginationNumber } = useLoadMorePage<IProject>(
    {
      initialTiles: projects,
      initialPaginationNumber: paginationNumber,
      loadMoreCallback,
    },
  );

  return (
    <Layout>
      <SEO seoTranslationKey='projects' />
      <ProjectFilters projectTags={projectTags} />
      {projects && <Projects projects={loadedTiles} />}
      <>
        {!!currentPaginationNumber && (
          <LoadMoreButton isLoading={isLoading} onLoadMore={onLoadMore} />
        )}
      </>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: Locale }) {
  const { response: projects, paginationNumber } = await fetchProjects({ lang: locale });
  const { response: projectTags } = await fetchProjectTags({ lang: locale });

  return {
    props: { projects, projectTags, paginationNumber, locale },
  };
}
