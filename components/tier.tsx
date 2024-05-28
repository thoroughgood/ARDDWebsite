// button.tsx
'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';
import TierVal from './tierVal';

interface TierProps {
  children: React.ReactNode; // Corrected type to React.ReactNode
  rank: string;
}

interface Ranks {}
/* Pass event handler to child to hide content*/
export default function Tier({ children, rank }: TierProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };
  console.log(isHovered);
  return (
    <div className="flex gap-1 pb-1">
      <TierVal rank={`${rank}`}></TierVal>
      <div className="flex w-full items-center justify-start rounded-lg bg-neutral-800 pl-3">
        {children}
      </div>
    </div>
  );
}
