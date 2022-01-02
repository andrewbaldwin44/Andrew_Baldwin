import { asynchrounousRequest } from 'externalRequest/asynchrounousRequest';

export const PROJECTS_CONTROLLER = {
  get: (query: { [key: string]: any }) => asynchrounousRequest('projects', { query }),
};
