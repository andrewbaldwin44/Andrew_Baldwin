import sanityClient from '@sanity/client';

export interface ICmsRequestVariables {
  lang?: string;
  paginationNumber?: number;
}

export enum CMS_ENTRIES {
  TESTIMONIALS = 'testimonial',
  PROJECTS = 'project',
}

const CMS_ENTRY_LENGTH_QUERY = `
  length(*[_type == $cmsEntry])
`;

export enum CMS_PAGINATION {
  start = 0,
  end = 49,
}

const client = sanityClient({
  projectId: process.env.SANITY_CLIENT_ID,
  apiVersion: 'v1',
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export async function cmsRequestResponse(
  response: string,
  cmsEntry: typeof CMS_ENTRIES[keyof typeof CMS_ENTRIES],
  paginationNumber: number = CMS_PAGINATION.start,
) {
  const cmsEntryLength = await client.fetch(CMS_ENTRY_LENGTH_QUERY, { cmsEntry });

  // subtract 1 from cmsEntryLength to account for
  // the paginationNumber starting at 0
  const newCmsPagination =
    cmsEntryLength - 1 > paginationNumber + CMS_PAGINATION.end
      ? CMS_PAGINATION.end + 1 + paginationNumber
      : null;

  return { response, paginationNumber: newCmsPagination };
}

export default client;
