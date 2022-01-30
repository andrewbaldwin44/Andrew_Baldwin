import { NextSeo } from 'next-seo';

import { useTranslations } from 'hooks/use-translations';

interface ISEO {
  seoTranslationKey: string;
  noindex?: boolean;
  nofollow?: boolean;
}

function SEO({ seoTranslationKey, noindex = false, nofollow = false }: ISEO) {
  const { getTranslations } = useTranslations();

  return (
    <NextSeo
      title={`Andrew Baldwin | ${getTranslations(`seo.title.${seoTranslationKey}`)}`}
      description={getTranslations(`seo.description.${seoTranslationKey}`)}
      noindex={noindex}
      nofollow={nofollow}
    />
  );
}

export default SEO;
