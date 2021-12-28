import sanityClient from '@sanity/client';

export interface ICmsRequestVariables {
  lang: string;
}

const client = sanityClient({
  projectId: process.env.SANITY_CLIENT_ID,
  apiVersion: 'v1',
  dataset: process.env.SANITY_DATASET,
  useCdn: true,
});

export default client;
