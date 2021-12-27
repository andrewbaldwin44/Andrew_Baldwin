import React from 'react';

import { IAsset } from 'assets/types';

export default function Vercel({ className }: IAsset) {
  return (
    <svg className={className} role='img' viewBox='0 0 25 24' xmlns='http://www.w3.org/2000/svg'>
      <title>Vercel icon</title>
      <path d='M24 22.525H0l12-21.05 12 21.05z' fill='#000000' />
    </svg>
  );
}
