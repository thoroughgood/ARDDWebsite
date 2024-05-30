import React, { useEffect, useState } from 'react';
import ReactCardFlip from 'react-card-flip';

interface ReactCardFlipProps {
  name: string;
  description: string;
  logo?: string;
}

export default function ReactCardFlipComponent({
  name,
  description,
  logo,
}: ReactCardFlipProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    let hoverTimeout: ReturnType<typeof setTimeout>;
    if (isHovered) {
      setIsFlipped(true);
    } else {
      // Add a delay before flipping back when mouse leaves the card
      hoverTimeout = setTimeout(() => {
        setIsFlipped(false);
      }, 300); // Adjust the delay time as needed
    }

    return () => {
      clearTimeout(hoverTimeout);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <ReactCardFlip isFlipped={isFlipped}>
      <div
        className="bg-gradient-to-r rounded-sm from-yellow-400 to-yellow-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Front side of the card */}
        <div className="rounded-2xl shadow-xl flex flex-col items-center pt-5 shadow-black h-72 w-48 bg-neutral-900">
          <div className="flex rounded-full w-24 h-24 justify-center items-center bg-neutral-500/40">
            {logo ? <img src={logo} alt="Logo" /> : 'IMG'}
          </div>
          <div className="bg-clip-text text-center text-2xl bg-gradient-to-r inline-block from-cyan-400 via-cyan-600/80 to-cyan-600 text-transparent">
            {name}
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-tr rounded-sm from-yellow-400 to-yellow-100"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Back side of the card */}
        <div className="rounded-2xl shadow-xl flex flex-col justify-items-stretch shadow-black h-72 w-48 bg-neutral-900">
          <div className="bg-clip-text bg-gradient-to-r p-6 text-xl inline-block from-purple-700 to-indigo-400 text-transparent text-center">
            {description}
          </div>
        </div>
      </div>
    </ReactCardFlip>
  );
}
