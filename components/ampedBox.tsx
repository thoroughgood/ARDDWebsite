// button.tsx
'use client';
import React, { Children, useEffect, useState } from 'react';
import { Button } from './ui/button';

interface ampedBoxProps {
  title: string;
  body: string;
  image: string;
}
/* Pass event handler to child to hide content*/
export default function ampedBox({
  title,
  body,
  image,
}: ampedBoxProps) {
  return (
    <div className={myFont.className}>
      <div className="flex h-64 gap-16 justify-center">
        <img className="rounded-lg" src={Jett.src}></img>
        <div className="bg-gray-100/10 rounded-ss-3xl rounded-ee-3xl p-4">
          {/* change the font here to make it look nicer */}
          <div className="text-white text-2xl font-bold">TITLE</div>
          <div className="text-white text-xl font-bold ">
            test container klasmdalskdmaslkdm
          </div>
        </div>
      </div>
    </div>
  );
}
