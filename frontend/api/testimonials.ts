import cmsRequest, { ICmsRequestVariables, cmsRequestResponse, CMS_ENTRIES } from 'api/cmsRequest';
import { asynchrounousRequest } from 'api/asynchrounousRequest';

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] {
    student,
    "studentImage": studentImage["asset"]->["url"],
    feedback,
    exercise,
  }[$next..($next+49)]
`;

export default async function fetchTestimonials(variables: ICmsRequestVariables = { next: 0 }) {
  try {
    const testimonials = await cmsRequest.fetch(TESTIMONIALS_QUERY, variables);

    return cmsRequestResponse(testimonials, CMS_ENTRIES.TESTIMONIALS, variables.next || 0);
  } catch ({ message }) {
    console.error('Testimonials CMS Request Failed:', message);

    return { response: null, next: null };
  }
}
