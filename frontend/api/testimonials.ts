import cmsRequest, {
  ICmsRequestVariables,
  cmsRequestResponse,
  CMS_ENTRIES,
  CMS_PAGINATION,
} from 'api/cmsRequest';
import { asynchrounousRequest } from 'api/asynchrounousRequest';

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] {
    student,
    "studentImage": studentImage["asset"]->["url"],
    feedback,
    exercise,
  }[$paginationNumber..($paginationNumber+${CMS_PAGINATION.end})]
`;

export default async function fetchTestimonials(
  variables: ICmsRequestVariables = { paginationNumber: CMS_PAGINATION.start },
) {
  try {
    const testimonials = await cmsRequest.fetch(TESTIMONIALS_QUERY, variables);

    return cmsRequestResponse(testimonials, CMS_ENTRIES.TESTIMONIALS, variables.paginationNumber);
  } catch ({ message }) {
    console.error('Testimonials CMS Request Failed:', message);

    return { response: null, paginationNumber: null };
  }
}
