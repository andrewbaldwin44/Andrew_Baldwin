import { Locale } from 'next/dist/compiled/@vercel/og/satori';
import Link from 'next/link';

import GithubSvg from 'assets/github';
import LinkedinSvg from 'assets/linkedin';
import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import TechnologyIcons from 'components/technology-icons/technology-icons.component';
import fetchProjectTags from 'externalRequest/projectTags';
import { useTranslations } from 'hooks/use-translations';
import { IProjectTag } from 'types/projects';

export async function getStaticProps({ locale }: { locale: Locale }) {
  const { response } = await fetchProjectTags({ lang: locale });

  return {
    props: { projectTags: response, locale },
  };
}

interface IHomePage {
  projectTags: IProjectTag[];
}

export default function HomePage({ projectTags }: IHomePage) {
  const { getTranslations } = useTranslations();

  return (
    <Layout>
      <SEO seoTranslationKey='home' />
      <div className='h-screen-available lg:flex lg:justify-between lg:items-center h-full '>
        <div className='text-center lg:text-left lg:min-w-content'>
          <h2 className='text-lg lg:text-2xl dark:text-gray-500'>
            {getTranslations('homePage.header')}
          </h2>
          <h1 className='text-4xl font-bold mb-2 lg:text-5xl lg:my-2 dark:text-gray-100'>
            Andrew Baldwin
          </h1>
          <h2 className='text-lg lg:text-2xl dark:text-gray-500'>
            {getTranslations('homePage.subheader')}
          </h2>
          <div className='flex justify-center gap-x-6 mt-8 lg:justify-start lg:gap-x-10'>
            <a href='https://github.com/andrewbaldwin44' rel='noopener noreferrer' target='_blank'>
              <GithubSvg className='h-10 w-10 lg:h-12 lg:w-12 text-black-600 dark:text-gray-100' />
            </a>
            <a
              href='https://www.linkedin.com/in/andrew-baldwin44/'
              rel='noopener noreferrer'
              target='_blank'
            >
              <LinkedinSvg className='h-10 w-10 lg:h-12 lg:w-12' />
            </a>
          </div>
          <div className='flex flex-col lg:flex-row mt-24 gap-4'>
            {/* <Link className='btn-solid-primary' href='/about'>
              About Me
            </Link> */}
            <Link className='btn-solid-secondary' href='/projects'>
              {getTranslations('homePage.recentProjects')}
            </Link>
          </div>
        </div>
        <TechnologyIcons projectTags={projectTags} />
      </div>
    </Layout>
  );
}
