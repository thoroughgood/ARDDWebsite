// button.tsx
'use client';
import React, { Children, useState } from 'react';
import { Button } from './ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

interface contentButtonProps {
  children: React.ReactNode; // Corrected type to React.ReactNode
  content?: string | undefined;
  type: string;
  uid: string;
}

export default function DropdownButton({
  children,
  content,
  type,
  uid,
}: contentButtonProps) {
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
      <Accordion
        className="rounded bg-cover flex flex-row flex-wrap gap-5"
        type="single"
        collapsible
      >
        <AccordionItem value={uid}>
          <div
            className="z-10 rounded-2xl"
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
            <AccordionTrigger className="z-0 rounded-2xl p-5 font-sans text-xl font-bold text-white">
              {result[0]}
            </AccordionTrigger>
          </div>
          <AccordionContent className="rounded-2xl border-x bord border-black">
            {/* To make adding content easier for glenn */}
            <div className="text-white p-5"> Type is: {type}</div>
            {result.map((value, index) => (
              <p className="text-white p-5" key={index}>
                {' '}
                {value}{' '}
              </p>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
