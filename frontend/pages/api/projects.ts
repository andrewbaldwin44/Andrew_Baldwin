import type { NextApiRequest, NextApiResponse } from 'next';

import fetchProjects from 'api/projects';

export default async function handler({ query }: NextApiRequest, res: NextApiResponse) {
  const { response, paginationNumber } = await fetchProjects({
    paginationNumber: Number(query.paginationNumber),
    lang: String(query.locale),
  });

  res.status(200).json({ response, paginationNumber });
}
