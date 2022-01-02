import { asynchrounousRequest } from 'externalRequest/asynchrounousRequest';

export const TESTIMONIALS_CONTROLLER = {
  get: (query: { [key: string]: any }) => asynchrounousRequest('testimonials', { query }),
};
