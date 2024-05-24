// Home.tsx
'use client';
import React, { useState } from 'react';
import TopicButton from '@/components/topicButton';
import DropdownButton from '@/components/dropdownButton';
import Tier from '@/components/tier';
import { Separator } from '@/components/ui/separator';
import testImage from '@/public/media/Untitled.png';
import jettImage from '@/public/media/valorant-jett-abilities-kit-release.jpg';
import { Badge } from '@/components/ui/badge';
import RankingBadge from '@/components/rankingBadge';
import { Accordion } from '@/components/ui/accordion';
import RoutineCard from '@/components/routineCard';
export default function Home() {
  //Use state to manage what content is shown, routines by default
  const [topic, setTopic] = useState('routines');
  return (
    <main className="w-full bg-stone-700 p-24 min-h-screen">
      <div className="flex w-full justify-center pb-5 text-5xl font-bold text-white">
        ARandomDeadDude's Aim Guide
      </div>
      <div className="mx-auto flex max-w-screen-xl flex-row">
        <div className="gap flex max-w-60 flex-col gap-5">
          <TopicButton onClick={() => setTopic('routines')}>
            Routines
          </TopicButton>
          <TopicButton onClick={() => setTopic('guides')}>
            {' '}
            Aiming Guides{' '}
          </TopicButton>
          <TopicButton onClick={() => setTopic('rankings')}>
            Aimer Rankings{' '}
          </TopicButton>
          <TopicButton onClick={() => setTopic('about')}>
            {' '}
            About{' '}
          </TopicButton>
        </div>
        {topic == 'routines' && (
          <>
            <div className="flex flex-col gap-5 flex-wrap pl-4">
              <Badge className="bg-green-600 w-[113px] max-h-12">
                <h1 className="text-2xl font-bold text-gray-300">
                  Peaked
                </h1>
              </Badge>
              <div className="flex flex-row flex-wrap gap-5 pl-5">
                <RoutineCard
                  link="https://go.aimlab.gg/v1/redirects?link=aimlab%3a%2f%2fworkshop%3fid%3d2916614100%26source%3d7D4B496234CF1774&link=steam%3a%2f%2frungameid%2f714010"
                  type="kovaaks"
                >
                  ARDD
                </RoutineCard>
                <RoutineCard
                  link="https://youtube.com"
                  type="aimlabs"
                  content={jettImage.src}
                >
                  Cartoonz
                </RoutineCard>
                <RoutineCard link="https://aimlabs.com" type="flex">
                  DAPR
                </RoutineCard>
                <RoutineCard
                  link="https://kovaaks.com"
                  type="kovaaks"
                  content={jettImage.src}
                >
                  YAY
                </RoutineCard>
              </div>
              <Separator className="bg-stone-800/80 ml-3 w-[96%]" />
              <Badge className="bg-pink-300 max-h-12 w-[90px]">
                <h1 className="text-2xl font-bold text-gray-300">
                  Good
                </h1>
              </Badge>
              <div className="flex flex-row flex-wrap gap-5 pl-3">
                <RoutineCard type="flex" content={jettImage.src}>
                  Default VAL Playlist
                </RoutineCard>{' '}
                <RoutineCard type="flex" content={jettImage.src}>
                  Default VAL Playlist
                </RoutineCard>
                <RoutineCard type="flex" content={jettImage.src}>
                  Default VAL Playlist
                </RoutineCard>
                <RoutineCard type="flex" content={jettImage.src}>
                  Default VAL Playlist
                </RoutineCard>
              </div>
            </div>
          </>
        )}
        {topic == 'guides' && <>Guides test</>}{' '}
        {topic == 'rankings' && (
          <div className="flex w-full flex-col pl-3">
            {/* Create separate divs for each tier */}
            <Tier rank="S">
              {' '}
              <div className="flex flex-col flex-wrap items-center justify-center gap-1">
                Arandomddeaddude
                <div className="flex max-w-72 flex-wrap justify-center gap-1">
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                  <Badge className="inline-flex w-fit">Astra</Badge>
                </div>
              </div>{' '}
            </Tier>
            <Tier rank="A">test</Tier>
            <Tier rank="B">test</Tier>
            <Tier rank="C">test</Tier>
          </div>
        )}
        {topic == 'about' && <>about me</>}
      </div>
    </main>
  );
}
