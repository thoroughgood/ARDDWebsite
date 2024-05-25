// button.tsx
'use client';
import React, { useState } from 'react';
import { Button } from './ui/button';

interface TopicButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Corrected type to React.ReactNode
}
/* Pass event handler to child to hide content*/
export default function TopicButton({
  children,
  onClick,
}: TopicButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };
  console.log(isHovered);
  return (
    <Button
      className="p-6 bg-neutral-800 font-sans text-xl font-bold shadow-lg duration-1000 ease-in-out hover:scale-105"
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
