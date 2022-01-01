import type { NextApiRequest, NextApiResponse } from 'next';

import fetchTestimonials from 'api/testimonials';

export default async function handler({ query, ...rest }: NextApiRequest, res: NextApiResponse) {
  const { response, paginationNumber } = await fetchTestimonials({
    paginationNumber: Number(query.paginationNumber),
  });

  res.status(200).json({ response, paginationNumber });
}
