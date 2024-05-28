// button.tsx
'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

interface TierValProps {
  rank: string;
}
/* Pass event handler to child to hide content*/
export default function TierVal({ rank }: TierValProps) {
  if (rank == 'S') {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-red-800/70 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == 'A') {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-orange-700/70 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == 'B') {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-yellow-400/70 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == 'C') {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-sm bg-green-500/70 text-xl font-bold">
        {rank}
      </div>
    );
  }
}
