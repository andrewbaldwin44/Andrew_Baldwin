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
      description={getTranslations(`seo.description.${seoTranslationKey}`)}
      nofollow={nofollow}
      noindex={noindex}
      title={`Andrew Baldwin | ${getTranslations(`seo.title.${seoTranslationKey}`)}`}
    />
  );
}

export default SEO;
