// button.tsx
'use client';
import React, { Children, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface TopicButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Corrected type to React.ReactNode
  isActive: boolean;
}
/* Pass event handler to child to hide content*/
export default function TopicButton({
  children,
  onClick,
  isActive,
}: TopicButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Button
      className={`bg-neutral-800 p-6 w-full font-sans text-xl font-bold shadow-lg duration-1000 ease-in-out hover:bg-white/30 hover:scale-105 ${
        isActive ? 'bg-neutral-700' : ''
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
