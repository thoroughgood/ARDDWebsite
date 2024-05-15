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
import IronGold from '@/public/media/1500x500.jpg';
import PlatDia from '@/public/media/Untitled.png';

export default function RankAccordion() {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    transition: 'all 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
  };
  const content = IronGold.src;
  const content2 = PlatDia.src;
  /* Convert children objects into array */
  /* If no image passed set default background */
  return (
    <>
      <Accordion
        className="rounded-2xl bg-cover shadow-stone-900"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <div className="z-0 rounded-2xl bg-yellow-300/40">
            <AccordionTrigger className="z-0 flex justify-center rounded-2xl p-5 font-sans text-xl font-bold text-white">
              Iron - Gold
            </AccordionTrigger>
          </div>
          <AccordionContent className="shadow-black shadow-md mx-3 bg-stone-00/40">
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
            <p>Here are some specific things!</p>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <div className="z-0 rounded-2xl bg-teal-300/40">
            <AccordionTrigger className="z-0 flex justify-center rounded-2xl p-5 font-sans text-xl font-bold text-white">
              Plat - Diamond
            </AccordionTrigger>
          </div>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it
            if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
