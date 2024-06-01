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
        className="rounded-2xl bg-neutral-900 shadow-stone-900"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <div className="z-0 border-b border-black bg-neutral-900 rounded-t-2xl shadow-md shadow-black">
            <AccordionTrigger className="flex justify-center">
              <div className="text-center font-bold font-sans text-xl inline-block text-neutral-700">
                Iron <span className="text-white">-</span>{' '}
                <span className="text-yellow-500">Gold</span>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent className="text-white p-1 bg-neutral-900">
            Established fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versio
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <div className="z-0 shadow-md shadow-black bg-neutral-900 border-black">
            <AccordionTrigger className="z-0 p-5 flex justify-center">
              <div className="text-center font-bold font-sans text-xl inline-block text-cyan-500">
                Platinum <span className="text-white">-</span>{' '}
                <span className="text-cyan-200">Diamond</span>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            tablished fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versioes. It comes with
            default styles that matches the other components&apos;
            aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it
            if you prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <div className="z-0 shadow-md shadow-black bg-neutral-900">
            <AccordionTrigger className="z-0 flex justify-center rounded-2xl p-5 font-sans text-xl font-bold">
              <div className="text-center font-bold text-green-500 font-sans text-xl inline-block ">
                Jade <span className="text-white">-</span>{' '}
                <span className="text-pink-400">Master</span>
              </div>{' '}
            </AccordionTrigger>
          </div>
          <AccordionContent>
            Ytablished fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versioic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <div className="z-0 shadow-md shadow-black bg-neutral-900">
            <AccordionTrigger className="z-0 flex justify-center rounded-2xl  p-5 font-sans text-xl font-bold text-white">
              <div className="text-center font-bold font-sans text-xl inline-block text-yellow-300">
                Grandmaster <span className="text-white">-</span>{' '}
                <span className="text-violet-500">Nova</span>
              </div>
            </AccordionTrigger>
          </div>
          <AccordionContent>
            tablished fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versioe!
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <div className="z-0 rounded-b-2xl shadow-md shadow-black bg-neutral-900">
            <AccordionTrigger className="z-0 flex justify-center rounded-2xl p-5 font-sans text-xl font-bold text-rose-500">
              Astra++
            </AccordionTrigger>
          </div>
          <AccordionContent>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five
            centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the
            1960s with the release of Letraset sheets containing Lore
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
