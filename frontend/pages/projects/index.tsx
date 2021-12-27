import fetchProjects from 'api/projects';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Projects, { IPortfolioProject } from 'components/projects/projects.component';

interface IProjectsPage {
  projects: IPortfolioProject;
}

export default function ProjectsPage({ projects }: IPortfolioProject) {
  return (
    <Layout>
      <SEO title='Projects' />
      {projects && <Projects projects={projects} />}
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const projects = await fetchProjects({ lang: locale });

  return {
    props: { projects },
  };
}
