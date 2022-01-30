import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import GithubSvg from 'assets/github';
import LinkedinSvg from 'assets/linkedin';
import TechnologyIcons from 'components/technology-icons/technology-icons.component';
import { useTranslations } from 'hooks/use-translations';

export default function HomePage() {
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
        </div>
        <TechnologyIcons />
      </div>
    </Layout>
  );
}
