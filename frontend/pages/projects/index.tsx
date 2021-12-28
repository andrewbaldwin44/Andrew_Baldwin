import fetchProjects from 'api/projects';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import Projects, { IProjects } from 'components/projects/projects.component';

export default function ProjectsPage({ projects }: IProjects) {
  return (
    <Layout>
      <SEO title='Projects' />
      {projects && <Projects projects={projects} />}
    </Layout>
  );
}

export async function getStaticProps({ locale }: { locale: string }) {
  const projects = await fetchProjects({ lang: locale });

  return {
    props: { projects },
  };
}
