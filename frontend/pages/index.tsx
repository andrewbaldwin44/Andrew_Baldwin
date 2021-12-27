import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import GithubSvg from 'assets/github';
import LinkedinSvg from 'assets/linkedin';
import TechnologyIcons from 'components/technology-icons/technology-icons.component';

export default function HomePage() {
  return (
    <Layout>
      <SEO title='Home' />
      <div className='text-center'>
        <h2 className='text-lg'>{"Hello, I'm"}</h2>
        <h1 className='text-4xl font-bold mb-2'>Andrew Baldwin</h1>
        <h2 className='text-lg'>Full Stack Web Developer</h2>
        <div className='flex justify-center gap-x-6 mt-8'>
          <a href='https://github.com/andrewbaldwin44' rel='noopener noreferrer' target='_blank'>
            <GithubSvg className='h-10 w-10' />
          </a>
          <a
            href='https://www.linkedin.com/in/andrew-baldwin44/'
            rel='noopener noreferrer'
            target='_blank'
          >
            <LinkedinSvg className='h-10 w-10' />
          </a>
        </div>
      </div>
      <TechnologyIcons />
    </Layout>
  );
}
