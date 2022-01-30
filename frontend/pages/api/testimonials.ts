import type { NextApiRequest, NextApiResponse } from 'next';

import fetchTestimonials from 'externalRequest/testimonials';

export default async function handler({ query }: NextApiRequest, res: NextApiResponse) {
  const { response, paginationNumber } = await fetchTestimonials({
    paginationNumber: Number(query.paginationNumber),
  });

  res.status(200).json({ response, paginationNumber });
}
