import cmsRequest, {
  ICmsRequestVariables,
  cmsRequestResponse,
  CMS_ENTRIES,
  CMS_PAGINATION,
} from 'externalRequest/cmsRequest';

const PROJECTS_QUERY = `
  *[_type == "project"] {
    "title": title[$lang],
    "description": description[$lang],
    githubLink,
    demoLink,
    "imageUrl": image["asset"]->["url"],
    tags,
    order,
  }[$paginationNumber..($paginationNumber+${CMS_PAGINATION.end})] | order(order asc)
`;

export default async function fetchProjects({
  lang,
  paginationNumber = CMS_PAGINATION.start,
}: ICmsRequestVariables) {
  try {
    const projects = await cmsRequest.fetch(PROJECTS_QUERY, { lang, paginationNumber });

    return cmsRequestResponse(projects, CMS_ENTRIES.PROJECTS, paginationNumber);
  } catch ({ message }) {
    // eslint-disable-next-line no-console
    console.error('Projects CMS Request Failed:', message);

    return { response: null, paginationNumber: null };
  }
}
