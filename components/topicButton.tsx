// button.tsx
'use client';
import React, { Children, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface TopicButtonProps {
  onClick: () => void;
  children: React.ReactNode; // Corrected type to React.ReactNode
  topic: String;
  currentTopic: String;
}
/* Pass event handler to child to hide content*/
export default function TopicButton({
  children,
  onClick,
  topic,
  currentTopic,
}: TopicButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);
  return (
    <Button
      className={`bg-stone-900 p-6 font-sans text-xl font-bold shadow-lg duration-1000 ease-in-out hover:scale-105 ${
        isActive ? 'bg-red-500' : ''
      }`}
      onMouseOver={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
      onClick={onClick}
    >
      {children}
    </Button>
  );
}
