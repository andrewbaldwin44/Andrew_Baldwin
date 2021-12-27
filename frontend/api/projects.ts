import cmsRequest from 'api/cmsRequest';

const PROJECTS_QUERY = `
  *[_type == "project"] {
    "title": title[$lang],
    "description": description[$lang],
    githubLink,
    demoLink,
    "imageUrl": image["asset"]->["url"],
    tags,
  }[1..50]
`;

export default async function fetchProjects(variables) {
  try {
    const projects = await cmsRequest.fetch(PROJECTS_QUERY, variables);

    return projects;
  } catch ({ message }) {
    return message;
  }
}
