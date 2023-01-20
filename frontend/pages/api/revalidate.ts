import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  { query: { token, pathname } }: NextApiRequest,
  res: NextApiResponse,
) {
  if (token !== process.env.NEXT_REVALIDATE_TOKEN) {
    return res.status(401).json({ message: 'Access Denied: Invalid token' });
  }

  try {
    await res.revalidate(pathname);
    return res.json({ revalidated: true });
  } catch (error) {
    return res.status(500).send(`Error revalidating ${pathname}`);
  }
}
