import Link from 'next/link';

import Layout from 'components/layout/layout.component';
import SEO from 'components/seo';
import { useTranslations } from 'hooks/use-translations';

export default function FourOhFour() {
  const { getTranslations } = useTranslations();

  return (
    <Layout>
      <div className='dark:text-gray-100'>
        <SEO seoTranslationKey='fourOhFour' noindex nofollow />
        <h1>{getTranslations('fourOhFourPage.header')}</h1>
        <p>{getTranslations('fourOhFourPage.message')}</p>
        <Link href='/' legacyBehavior>
          {getTranslations('fourOhFourPage.backHome')}
        </Link>
      </div>
    </Layout>
  );
}
