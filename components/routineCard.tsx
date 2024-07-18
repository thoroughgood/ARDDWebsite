// button.tsx
'use client';
import React, { Children, useState } from 'react';
import { Button } from './ui/button';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-hot-toast';
import { Bebas_Neue } from 'next/font/google';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from './ui/hover-card';
import Link from 'next/link';
import { title } from 'process';
const bebas_neue = Bebas_Neue({
  subsets: ['latin'],
  weight: '400',
});
interface routineCardProps {
  type: string;
  link: string;
  training: boolean;
  title: string;
  content: string;
}
export default function RoutineCard({
  type,
  link,
  training,
  title,
  content
}: routineCardProps) {
  const [copied, isCopied] = useState(false);

  const handleKovaaksClick = () =>
    toast('Link copied!', {
      duration: 3000,
      position: 'top-center',
      icon: '😁'
      
    });
  if (type === 'kovaaks') {
    return (
      <>
        <CopyToClipboard
          text={link}
          onCopy={() => {
            isCopied(true);
          }}
        >
          <Button className="p-0 h-auto">
            <HoverCard>
              <HoverCardTrigger
                onClick={handleKovaaksClick}
                className={`z-10 rounded-xl h-12 text-2xl duration-150 px-6 py-2 text-white brightness-90 shadow-md shadow-black ease-in-out w-auto max-h-screen-lg bg-amber-700 hover:shadow-[0px_0px_3px_3px_rgab(0,0,0)] border border-amber-600 hover:scale-110 max-w-screen-lg hover:shadow-amber-900 hover:bg-amber-700`}
              >
                <div
                  className={`${bebas_neue.className} px-1 flex flex-nowrap items-center`}
                >
                  {title.slice(6)}
                  {training ? <>&nbsp;💪</> : <>&nbsp;🎯</>}
                </div>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 whitespace-pre-line">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
                  </div></HoverCardContent>
            </HoverCard>
          </Button>
        </CopyToClipboard>
      </>
    );
  } else {
    return (
      <>
          <Button className="p-0 h-auto">
            <HoverCard>
              <HoverCardTrigger
                className={`z-10 rounded-xl h-12 text-2xl duration-150 px-6 py-2 text-white brightness-90 shadow-md shadow-black ease-in-out w-auto max-h-screen-lg bg-cyan-700 hover:shadow-[0px_0px_3px_3px_rgab(0,0,0)] border border-cyan-600 hover:scale-110 max-w-screen-lg hover:shadow-cyan-900 hover:bg-cyan-700`}
                >
                <Link href={`${link}`} passHref legacyBehavior>
                  <a
                    className={`${bebas_neue.className} px-1 flex flex-nowrap items-center`}
                    target="_blank"
                  >
                    {title.slice(6)}
                    
                    {training ? <>&nbsp;💪</> : <>&nbsp;🎯</>}
                    
                  </a>
                </Link>
              </HoverCardTrigger>
              <HoverCardContent className="w-80">
                <div className="flex justify-between space-x-4 whitespace-pre-line">
                {content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}Hey</p>
                ))}
                  </div></HoverCardContent>
            </HoverCard>
          </Button>
      </>
    );
  }
}
