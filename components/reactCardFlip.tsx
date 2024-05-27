// button.tsx
'use client';
import React, { Children, useEffect, useState } from 'react';
import { Button } from './ui/button';
import ReactCardFlip from 'react-card-flip';

/* Pass event handler to child to hide content*/
interface reactCardFlipProps {
  name: String;
  description: String;
  logo?: String;
}
export default function reactCardFlip({
  name,
  description,
  logo,
}: reactCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div className="bg-gradient-to-r rounded-sm from-yellow-400 to-yellow-100">
        <div
          onClick={onClick}
          className="rounded-2xl shadow-xl flex flex-col items-center pt-5 shadow-black h-72 w-48 bg-neutral-900"
        >
          <div className="flex rounded-full w-24 h-24 justify-center items-center bg-neutral-600">
            {' '}
            IMG{' '}
          </div>
          <div className="bg-clip-text text-center text-2xl bg-gradient-to-r inline-block from-cyan-400 via-cyan-600/80 to-cyan-600 text-transparent">
            {name}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-tr rounded-sm from-yellow-400 to-yellow-100">
        <div
          onClick={onClick}
          className="rounded-2xl shadow-xl flex flex-col justify-items-stretch shadow-black h-72 w-48 bg-neutral-900"
        >
          <div className="bg-clip-text bg-gradient-to-r p-6 text-xl inline-block from-purple-700 to-indigo-400 text-transparent text-center">
            {description}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
