export default {
  name: 'content',
  title: 'Content',
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
      type: 'localeMarkdown',
    },
    {
      name: 'url',
      title: 'Url',
      type: 'string',
    },
  ],
  preview: {
    select: {
      title: 'header',
    },
    prepare: ({ title }) => ({ title: title ? title['en'] : null }),
  },
};
