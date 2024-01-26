const removeSpecialCharacters = string => string.replace(/[^\w\s]/gi, '');

export default {
  name: 'projectTag',
  title: 'Project Tag',
  type: 'document',
  fields: [
    {
      name: 'tag',
      title: 'Tag',
      type: 'localeString',
    },
    {
      name: 'icon',
      title: 'Icon',
      type: 'image',
    },
    {
      name: 'projectTagId',
      title: 'Project Tag Id',
      type: 'slug',
      options: {
        source: 'tag',
        slugify: tag => removeSpecialCharacters(tag['en']).toLowerCase().replace(/\s+/g, '-'),
      },
    },
  ],
  preview: {
    select: {
      title: 'tag',
      icon: 'icon',
    },
    prepare: ({ title, icon }) => ({
      title: title ? title['en'] : null,
      media: icon,
    }),
  },
};
