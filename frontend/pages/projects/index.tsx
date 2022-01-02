import { useState } from 'react';
import { useRouter } from 'next/router';

import fetchProjects from 'externalRequest/projects';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Projects, { IProject } from 'components/projects/projects.component';
import { PROJECTS_CONTROLLER } from 'externalRequest/controllers/projects';
import LoadMoreButton from 'components/load-more-button/load-more-button.component';
import useLoadMorePage from 'components/load-more-button/hooks/use-load-more-page.hook';

interface IProjectsPage {
  projects: IProject[];
  paginationNumber: number;
}

export default function ProjectsPage({ projects, paginationNumber }: IProjectsPage) {
  const { locale } = useRouter();

  const { onLoadMore, isLoading, loadedTiles, currentPaginationNumber } = useLoadMorePage<IProject>(
    {
      initialTiles: projects,
      initialPaginationNumber: paginationNumber,
      loadMoreCallback: ({ paginationNumber }) =>
        PROJECTS_CONTROLLER.get({ paginationNumber, locale }),
    },
  );

  return (
    <Layout>
      <SEO title='Projects' />
      {projects && <Projects projects={loadedTiles} />}
      <>
        {!!currentPaginationNumber && (
          <LoadMoreButton onLoadMore={onLoadMore} isLoading={isLoading} />
        )}
      </>
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const { response, paginationNumber } = await fetchProjects({ lang: locale });

  return {
    props: { projects: response, paginationNumber },
  };
}
