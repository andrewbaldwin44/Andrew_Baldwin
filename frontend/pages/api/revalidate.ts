import type { NextApiRequest, NextApiResponse } from 'next';

interface IRevalidateHandlerRequest extends NextApiRequest {
  query: {
    token?: string;
    pathname?: string;
  };
}

export default async function handler(
  { query: { token, pathname } }: IRevalidateHandlerRequest,
  res: NextApiResponse,
) {
  if (!token || !pathname) {
    return res.status(401).json({ message: 'Access Denied: Insufficient Paramaters' });
  }

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
