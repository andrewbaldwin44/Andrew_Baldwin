export default {
  name: 'featuredTestimonials',
  title: 'Featured Testimonials',
  type: 'document',
  fields: [
    {
      name: 'header',
      title: 'Header',
      type: 'localeString',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'localeText',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'testimonial', title: 'Testimonial' }] }],
    },
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare: ({ title }) => ({
      title: title ? title['en'] : null,
    }),
  },
};
