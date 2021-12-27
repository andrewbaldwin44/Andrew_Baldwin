import { NextSeo } from 'next-seo';

interface ISEO {
  description?: string;
  lang?: string;
  title: string;
}

function SEO({ description = '', lang = 'en', title }: ISEO) {
  return <NextSeo title={`Andrew Baldwin | ${title}`} description={description} />;
}

export default SEO;
