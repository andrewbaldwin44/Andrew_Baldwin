import sanityClient from '@sanity/client';

export interface ICmsRequestVariables {
  lang?: string;
  next?: number;
}

export enum CMS_ENTRIES {
  TESTIMONIALS = 'testimonial',
  PROJECTS = 'project',
}

const CMS_ENTRY_LENGTH_QUERY = `
  length(*[_type == $cmsEntry])
`;

const client = sanityClient({
  projectId: process.env.SANITY_CLIENT_ID,
  apiVersion: 'v1',
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export async function cmsRequestResponse(
  response: string,
  cmsEntry: typeof CMS_ENTRIES[keyof typeof CMS_ENTRIES],
  next: number,
) {
  const cmsEntryLength = await client.fetch(CMS_ENTRY_LENGTH_QUERY, { cmsEntry });

  return { response, next: cmsEntryLength > next + 49 ? next + 50 : null };
}

export default client;
