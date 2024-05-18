// button.tsx
'use client';
import React, { Children, useState } from 'react';
import { Button } from './ui/button';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';

interface routineCardProps {
  children: React.ReactNode; // Corrected type to React.ReactNode
  content?: string | undefined;
  type: String;
}

export default function RoutineCard({
  children,
  content,
  type,
}: routineCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };
  /* Convert children objects into array */
  const result = Children.toArray(children);
  /* If no image passed set default background */
  return (
    <>
      <HoverCard>
        <div
          className="z-10 rounded-2xl max-h-screen-lg max-w-screen-lg"
          /* If there is an image, set it, else use default colour */
          style={
            content
              ? {
                  backgroundImage: `url(${content})`,
                  backgroundSize: '100% 400%',
                  backgroundRepeat: 'no-repeat',
                }
              : {
                  backgroundColor:
                    'rgb(28 25 23 / var(--tw-bg-opacity))',
                }
          }
        >
          <HoverCardTrigger className="flex justify-content align-middle z-0 rounded-2xl p-5 font-sans text-xl font-bold text-white">
            {result[0]}
          </HoverCardTrigger>
        </div>
        <HoverCardContent className="rounded-2xl bg-stone-900 shadow-xl border-none">
          {/* To make adding content easier for glenn */}
          <div className="text-white p-5"> Type is: {type}</div>
          {result.map((value, index) => (
            <p className="text-white p-5" key={index}>
              {' '}
              {value}{' '}
            </p>
          ))}
        </HoverCardContent>
      </HoverCard>
    </>
  );
}
