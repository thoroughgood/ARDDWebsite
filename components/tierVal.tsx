// button.tsx
"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

interface TierValProps {
  rank: string;
}
/* Pass event handler to child to hide content*/
export default function TierVal({ rank }: TierValProps) {
  if (rank == "S") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-red-800 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == "A") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-orange-700 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == "B") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-yellow-400 text-xl font-bold">
        {rank}
      </div>
    );
  }
  if (rank == "C") {
    return (
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-green-500 text-xl font-bold">
        {rank}
      </div>
    );
  }
}
