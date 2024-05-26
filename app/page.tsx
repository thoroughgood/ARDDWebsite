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
import RankAccordion from '@/components/rankAccordion';
export default function Home() {
  //Use state to manage what content is shown, routines by default
  const [topic, setTopic] = useState('routines');
  return (
    <main className="w-full bg-stone-700 p-24">
      <div className="flex w-full justify-center pb-5 text-5xl font-bold text-black">
        ARandomDeadDude's Aim Guide
      </div>
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-row">
        <div className="gap flex max-w-60 flex-col gap-5 pt-5">
          <TopicButton
            isActive={topic === 'routines'}
            onClick={() => setTopic('routines')}
          >
            Routines
          </TopicButton>
          <TopicButton
            isActive={topic === 'guides'}
            onClick={() => setTopic('guides')}
          >
            Aiming Guide
          </TopicButton>
          <TopicButton
            isActive={topic === 'rankings'}
            onClick={() => setTopic('rankings')}
          >
            Aimer Rankings{' '}
          </TopicButton>
          <TopicButton
            isActive={topic === 'about'}
            onClick={() => setTopic('about')}
          >
            {' '}
            About{' '}
          </TopicButton>
        </div>
        {topic == 'routines' && (
          <div className="flex w-full flex-col gap-5 pl-3">
            <div className="flex w-full justify-start pl-3">
              <Badge className="bg">
                <h1 className="text-2xl font-bold text-gray-300">
                  Peaked
                </h1>
              </Badge>
            </div>

            <DropdownButton type="Static" content={jettImage.src}>
              <p> Default Valorant Playlist </p>
              <p>This is the type of playlist</p>
              <p>Hey</p>
              <p> This is a test paragraph! </p>
            </DropdownButton>
            <DropdownButton type="Flick">
              Dapr Valorant Playlist
            </DropdownButton>
          </div>
        )}
        {topic == 'guides' && (
          <div className="flex w-full flex-col pl-6">
            <div className="text-white font-bold text-3xl">
              Static
            </div>
            tablished fact that a reader will be distracted by the
            readable content of a page when looking at its layout. The
            point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using
            'Content here, content here', making it look like readable
            English. Many desktop publishing packages and web page
            editors now use Lorem Ipsum as their default model text,
            and a search for 'lorem ipsum' will uncover many web sites
            still in their infancy. Various versio
            <RankAccordion />
          </div>
        )}{' '}
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
