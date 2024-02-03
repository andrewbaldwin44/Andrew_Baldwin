import cmsRequest, { ICmsRequestVariables } from 'externalRequest/cmsRequest';
import { PROJECT_TAGS_QUERY } from 'externalRequest/projectTags';

const HOMEPAGE_QUERY = `
{
  "content": *[_type == "content" && url == $url] {
    "header": header[$lang],
    "body": body[$lang],
  }[0],
  "featuredTestimonials": *[_type == "featuredTestimonials"] {
    "header": header[$lang],
    "body": body[$lang],
    "testimonials": testimonials[]-> {
      student,
      "studentImage": studentImage["asset"]->["url"],
      feedback,
      exercise,
      link,
      source,
    }
  }[0],
  "projectTags": ${PROJECT_TAGS_QUERY}
}
  `;

export default function fetchHomepageProps({ lang }: ICmsRequestVariables) {
  try {
    return cmsRequest.fetch(HOMEPAGE_QUERY, { lang, url: '/' });
  } catch {
    // eslint-disable-next-line no-console
    console.error('CMS Request Failed');

    return { response: null };
  }
}
