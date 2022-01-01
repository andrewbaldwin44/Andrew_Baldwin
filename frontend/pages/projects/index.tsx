import { useState } from 'react';

import fetchProjects from 'api/projects';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Projects, { IProject } from 'components/projects/projects.component';
import { PROJECTS_CONTROLLER } from 'api/controllers/projects';

interface IProjectsPage {
  projects: IProject[];
  next: number;
}

export default function ProjectsPage({ projects, next }: IProjectsPage) {
  const [loadedProjects, setLoadedProjects] = useState(projects);
  const [isLoading, setIsLoading] = useState(false);
  const [nextProjects, setNextProjects] = useState(next);

  const onLoadMore = async () => {
    setIsLoading(true);

    const { response, next: newNextProjects } = await PROJECTS_CONTROLLER.get({ next });
    setLoadedProjects([...loadedProjects, ...response]);
    setNextProjects(newNextProjects);

    setIsLoading(false);
  };

  return (
    <Layout>
      <SEO title='Projects' />
      {projects && (
        <Projects
          projects={loadedProjects}
          shouldShowLoadMore={!!nextProjects}
          onLoadMore={onLoadMore}
          isLoading={isLoading}
        />
      )}
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const { response, next } = await fetchProjects({ lang: locale });

  return {
    props: { projects: response, next },
  };
}
