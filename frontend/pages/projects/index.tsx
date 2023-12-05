import { useCallback } from 'react';

import Layout from 'components/layout/layout.component';
import useLoadMorePage from 'components/load-more-button/hooks/use-load-more-page.hook';
import LoadMoreButton from 'components/load-more-button/load-more-button.component';
import Projects, { IProject } from 'components/projects/projects.component';
import SEO from 'components/seo';
import { PROJECTS_CONTROLLER } from 'externalRequest/controllers/projects';
import fetchProjects from 'externalRequest/projects';
import { Locale } from 'hooks/use-translations';

interface IProjectsPage {
  projects: IProject[];
  paginationNumber: number;
  locale: Locale;
}

export default function ProjectsPage({ locale, paginationNumber, projects }: IProjectsPage) {
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
  const { response, paginationNumber } = await fetchProjects({ lang: locale });

  return {
    props: { projects: response, paginationNumber, locale },
  };
}
