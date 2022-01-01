import cmsRequest, { ICmsRequestVariables, cmsRequestResponse, CMS_ENTRIES } from 'api/cmsRequest';
import { asynchrounousRequest } from 'api/asynchrounousRequest';

const PROJECTS_QUERY = `
  *[_type == "project"] {
    "title": title[$lang],
    "description": description[$lang],
    githubLink,
    demoLink,
    "imageUrl": image["asset"]->["url"],
    tags,
  }[$next..($next+49)]
`;

export default async function fetchProjects(variables: ICmsRequestVariables = { next: 0 }) {
  try {
    const projects = await cmsRequest.fetch(PROJECTS_QUERY, variables);

    return cmsRequestResponse(projects, CMS_ENTRIES.PROJECTS, variables.next || 0);
  } catch ({ message }) {
    console.error('Testimonials CMS Request Failed:', message);

    return { response: null, next: null };
  }
}
