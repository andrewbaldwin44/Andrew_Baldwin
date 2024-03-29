import cmsRequest, {
  ICmsRequestVariables,
  cmsRequestResponse,
  CMS_ENTRIES,
  CMS_PAGINATION,
} from 'externalRequest/cmsRequest';

const TESTIMONIALS_QUERY = `
  *[_type == "testimonial"] {
    student,
    "studentImage": studentImage["asset"]->["url"],
    feedback,
    exercise,
    link,
    source,
  }[$paginationNumber..($paginationNumber+${CMS_PAGINATION.end})]
`;

export default async function fetchTestimonials(
  { paginationNumber }: ICmsRequestVariables = { paginationNumber: CMS_PAGINATION.start },
) {
  try {
    const testimonials = await cmsRequest.fetch(TESTIMONIALS_QUERY, { paginationNumber });

    return cmsRequestResponse(testimonials, CMS_ENTRIES.TESTIMONIALS, paginationNumber);
  } catch ({ message }) {
    // eslint-disable-next-line no-console
    console.error('Testimonials CMS Request Failed:', message);

    return { response: null, paginationNumber: null };
  }
}
