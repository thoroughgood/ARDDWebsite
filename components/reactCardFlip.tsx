// button.tsx
'use client';
import React, { Children, useEffect, useState } from 'react';
import { Button } from './ui/button';
import ReactCardFlip from 'react-card-flip';

/* Pass event handler to child to hide content*/
export default function reactCardFlip() {
  const [isFlipped, setIsFlipped] = useState(false);
  const onClick = () => {
    setIsFlipped(!isFlipped);
  };
  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div
        onClick={onClick}
        className="rounded-2xl shadow-lg flex flex-col items-center pt-5 shadow-black h-64 w-32 bg-neutral-900"
      >
        <div className="flex rounded-full w-20 h-20 justify-center items-center border border-neutral-800">
          {' '}
          Test{' '}
        </div>
        <div className="bg-clip-text font-bold text-2xl bg-gradient-to-r inline-block from-purple-700 to-indigo-400 text-transparent">
          ASTRA
        </div>
      </div>
      <div
        onClick={onClick}
        className="rounded-2xl shadow-lg flex flex-col justify-items-stretch shadow-black h-64 w-32 bg-neutral-900"
      >
        <div className="bg-clip-text bg-gradient-to-r inline-block from-purple-700 to-indigo-400 text-transparent">
          Achieved ASTRA rank in the Voltaic Benchmark
        </div>
      </div>
    </ReactCardFlip>
  );
}
