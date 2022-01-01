import type { NextApiRequest, NextApiResponse } from 'next';

import fetchProjects from 'api/projects';

export default async function handler({ query }: NextApiRequest, res: NextApiResponse) {
  const { response, next } = await fetchProjects({ next: Number(query.next), lang: 'en' });

  res.status(200).json({ response, next });
}
