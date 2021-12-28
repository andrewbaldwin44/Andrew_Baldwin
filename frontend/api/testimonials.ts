import cmsRequest from 'api/cmsRequest';

const TESTIMONIALS_QUERY = `
  * [_type == "testimonial"] {
    student,
    "studentImage": studentImage["asset"]->["url"],
    feedback,
    exercise,
  }[1..50]
`;

export default async function fetchTestimonials() {
  try {
    const testimonials = await cmsRequest.fetch(TESTIMONIALS_QUERY);

    return testimonials;
  } catch ({ message }) {
    return message;
  }
}
