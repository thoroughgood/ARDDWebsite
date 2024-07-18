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
import RoutineCard from '@/components/routineCard';
import Background from '@/public/media/website.png';
import ReactCard from '@/components/reactCardFlip';

export default function Home() {
  //Use state to manage what content is shown, routines by default
  const [topic, setTopic] = useState('routines');
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(23,23,23,0.2) 0%, rgba(23,23,23,0.5), 40%, rgba(23,23,23,0.9) 50%), url(${Background.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      <main className="w-full px-24 py-14 min-h-screen">
        <div className="mx-auto flex-col max-w-screen-xl">
          <div className="gap justify-evenly flex max-w-full flex-row gap-5 p-5">
            <TopicButton
              onClick={() => setTopic('routines')}
              isActive={topic === 'routines'}
            >
              Routines
            </TopicButton>
            <TopicButton
              onClick={() => setTopic('guides')}
              isActive={topic === 'guides'}
            >
              {' '}
              Aiming Guides{' '}
            </TopicButton>
            <TopicButton
              onClick={() => setTopic('rankings')}
              isActive={topic === 'rankings'}
            >
              Aimer Rankings{' '}
            </TopicButton>
            <TopicButton
              onClick={() => setTopic('about')}
              isActive={topic === 'about'}
            >
              {' '}
              About{' '}
            </TopicButton>
          </div>
          {topic == 'routines' && (
            <>

            <div> </div>
              <div className="flex flex-col gap-5 flex-wrap pt-5">
                <Badge className="bg-green-300/30 w-[113px] max-h-12">
                  <h1 className="text-2xl font-bold text-gray-300">
                    Peaked
                  </h1>
                </Badge>
                <div className="flex flex-row flex-wrap gap-5">
                  <RoutineCard
                    link="https://go.aimlab.gg/v1/redirects?link=aimlab%3a%2f%2fworkshop%3fid%3d2916614100%26source%3d7D4B496234CF1774&link=steam%3a%2f%2frungameid%2f714010"
                    type="kovaaks"
                    training={true}
                    title="Name: Kovaaks - VALORANT"
                    content="Creator: Kovaaks \n
                      Playlist Link: KovaaKsClippingBrownBottomfrag \n
                      Tier: D\n
                      Type: Development\n
                      Review: Most scenarios are not made specifically for valorant, so there are\n
                      scenarios that cover a relevant aim concept, but not to the specific extent of\n
                      1:1 use in valorant. This means you will practise additional irrelevant aspects \n
                      on top of the scenario's useful parts, making practice extremely inefficient."
                  />
                  <RoutineCard
                    link="https://youtube.com"
                    type="aimlabs"
                    training={true}
                    title="Name: VALORANT - Freakazoid"
                    content="Creator: Kovaaks\n
                  Playlist Link: KovaaKsBoomstickingJitteryDink
                  Tier: E
                  Type: Warmup
                  Review: This routine is basic and outdated, for each scenario there is a significantly better replacement that is more effective for warming up. "
                  />
                  <RoutineCard
                    link="https://go.aimlab.gg/v1/redirects?link=aimlab%3A%2F%2Fworkshop%3Fid%3D2916614100%26source%3D7D4B496234CF1774&link=steam%3A%2F%2Frungameid%2F714010"
                    type="aimlabs"
                    training={false}
                    title="Name: Valorant RAMP Warmup"
                    content="Creator: Minigod
Playlist Link: KovaaKsQuestingFastCheater
Tier: S
Type: Warmup
Review: A well-made warmup that covers a variety of aiming concepts relevant to valorant by using both revised old scenarios and newly created innovative scenarios. High praise for the accessibility of each scenario, it isn’t overly difficult to the point beginners would practice incorrectly and it’s not too easy so there is still value for adept aimers to practice. However, the ordering of the scenarios is suboptimal, especially towards the latter half of the warmup."
                  />
                  <RoutineCard
                    link="https://youtube.com"
                    type="aimlabs"
                    training={false}
                    title="Name: Receptioncells - Tac-FPS dynamic"
                    content="Creator: Receptioncells
Playlist Link: KovaaKsSnipingJunglegreenOptic 
Tier: F
Type: Development
Review: This playlist composition of popular tacfps dynamic tasks with additional variations of those same scenarios, comes to a total playtime of 45mins. This routine is severely lacking in variety and is extremely bloated, even when shuffled this playlist provides poor value for time."
                  />
                  <RoutineCard
                    link="https://youtube.com"
                    type="aimlabs"
                    training={false}
                    title="Name: xset"
                    content="Creator: zekken
Playlist Link: KovaaKsFeedingFraggedValue
Tier: E
Type: Warmup
Review: This routine is basic and also outdated, with the exception of “VoxTargetSwitch Click Small” There are better scenarios that achieve the same result and more for warming up for valorant."
                  />

                  <RoutineCard link="https://aimlabs.com" type="aimlabs" title="Name: PRX Something" training={true} content="Creator: Something
Tier: E
Type: Warmup
Review: There are too many static scenarios, and on top of that they are static scenarios that aren’t structured for tacfps aim. The extensive amount of static practice causes an extremely high amount of overlap of the mechanics between each scenario being practiced which makes the playlist very inefficient compared to a well-balanced playlist that covers multiple types of aiming."/>
                </div>
                <Badge className="bg-pink-300/30 max-h-12 w-[90px]">
                  <h1 className="text-2xl font-bold text-gray-300">
                    Good
                  </h1>
                </Badge>
                <div className="flex flex-row flex-wrap gap-5 pl-3">
                  <p>Test</p>
                </div>
                <Badge className="bg-yellow-300/30 max-h-12 w-[71px]">
                  <h1 className="text-2xl font-bold text-gray-300">
                    Mid
                  </h1>{' '}
                </Badge>
                <div className="flex flex-row flex-wrap gap-5 pl-3">
                  <p>test</p>
                </div>
                <Badge className="bg-stone-800 max-h-12 w-[85px]">
                  <h1 className="text-2xl font-bold text-gray-300">
                    Trash
                  </h1>{' '}
                </Badge>
                <div className="flex flex-row flex-wrap gap-5 pl-3">
                  <p>test</p>
                </div>
              </div>
            </>
          )}
          {topic == 'guides' && (
            <>
              <div className="flex w-full flex-col pl-6">
                <div className="text-white font-bold text-3xl">
                  Static
                </div>
                <div className="text-white">
                  tablished fact that a reader will be distracted by
                  the readable content of a page when looking at its
                  layout. The point of using Lorem Ipsum is that it
                  has a more-or-less normal distribution of letters,
                  as opposed to using 'Content here, content here',
                  making it look like readable English. Many desktop
                  publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a
                  search for 'lorem ipsum' will uncover many web sites
                  still in their infancy. Various versio
                </div>

                <RankAccordion />
              </div>
            </>
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
          {topic == 'about' && (
            <>
              <div className="flex flex-row flex-wrap pl-5 gap-5">
                <ReactCard
                  name="ASTRA"
                  description="Achieved astra rank in Voltaic benchmarks"
                />
                <ReactCard
                  name="VOLTAIC"
                  description="Member of professional aiming group VT"
                />
                <ReactCard
                  name="TF2 PRO"
                  description="PRO TF2 PLAYER"
                />
                <ReactCard
                  name="RADIANT"
                  description="RADIANT VALORANT PLAYER"
                />
                <ReactCard
                  name="AIMLABS RUNNERUP"
                  description="Runner-Up for aimlabs skill tournament"
                />
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
