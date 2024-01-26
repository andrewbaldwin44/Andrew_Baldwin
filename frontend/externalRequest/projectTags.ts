import cmsRequest, {
  ICmsRequestVariables,
  cmsRequestResponse,
  CMS_ENTRIES,
  CMS_PAGINATION,
} from 'externalRequest/cmsRequest';

const PROJECT_TAGS_QUERY = `
    *[_type == "projectTag"] {
        "tag": tag[$lang],
        "iconUrl": icon["asset"]->["url"],
        "projectTagId": projectTagId["current"]
    }
`;

export default async function fetchProjectTags({
  lang,
  paginationNumber = CMS_PAGINATION.start,
}: ICmsRequestVariables) {
  try {
    const projects = await cmsRequest.fetch(PROJECT_TAGS_QUERY, { lang });

    return cmsRequestResponse(projects, CMS_ENTRIES.PROJECTS, paginationNumber);
  } catch {
    // eslint-disable-next-line no-console
    console.error('Projects CMS Request Failed');

    return { response: null, paginationNumber: null };
  }
}
