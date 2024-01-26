export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'localeString',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'localeText',
    },
    {
      name: 'githubLink',
      title: 'Githb Link',
      type: 'string',
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'projectTag', title: 'Project Tag' }] }],
    },
    {
      name: 'order',
      title: 'Order',
      type: 'number',
    },
  ],
  preview: {
    select: {
      title: 'title',
      image: 'image',
    },
    prepare: ({ title, image }) => ({
      title: title ? title['en'] : null,
      media: image,
    }),
  },
};
