import Link from 'next/link';

import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import { useTranslations } from 'hooks/use-translations';

export default function FourOhFour() {
  const { getTranslations } = useTranslations();

  return (
    <Layout>
      <SEO nofollow noindex seoTranslationKey='fourOhFour' />
      <div className='h-screen-available flex flex-col items-center justify-center dark:text-gray-100'>
        <h1 className='text-8xl mb-4'>{getTranslations('fourOhFourPage.header')}</h1>
        <p>{getTranslations('fourOhFourPage.message')}</p>
        <Link className='link' href='/'>
          {getTranslations('fourOhFourPage.backHome')}
        </Link>
      </div>
    </Layout>
  );
}
