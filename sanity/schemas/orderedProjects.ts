export default {
  name: 'orderedProjects',
  title: 'Ordered Projects',
  type: 'document',
  fields: [
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'project', title: 'Project' }], unique: true }],
    },
  ],
  preview: {
    prepare: () => ({
      title: 'Projects',
    }),
  },
};
