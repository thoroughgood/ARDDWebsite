// button.tsx
"use client";
import React, { Children, useState } from "react";
import { Button } from "./ui/button";
import TierVal from "./tierVal";
import { Badge } from "./ui/badge";

interface rankingBadgeProps {
  children: React.ReactNode; // Corrected type to React.ReactNode
  rank: string;
}

interface Ranks {}
/* Pass event handler to child to hide content*/
export default function RankingBadge({ children, rank }: rankingBadgeProps) {
  const result = Children.toArray(children);
  var output = result.map((e) => {
    <Badge>{`${e}`}</Badge>;
  });
  return output;
}
