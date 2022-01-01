import type { NextApiRequest, NextApiResponse } from 'next';

import fetchTestimonials from 'api/testimonials';

export default async function handler({ query }: NextApiRequest, res: NextApiResponse) {
  const { response, next } = await fetchTestimonials({ next: Number(query.next) });

  res.status(200).json({ response, next });
}
