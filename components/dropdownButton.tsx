// button.tsx
"use client";
import React, { Children, useState } from "react";
import { Button } from "./ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

interface contentButtonProps {
  children: React.ReactNode; // Corrected type to React.ReactNode
  content?: string | undefined;
}

export default function DropdownButton({
  children,
  content,
}: contentButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle: React.CSSProperties = {
    transition: "all 0.3s ease-in-out",
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  };
  /* Convert children objects into array */
  const result = Children.toArray(children);
  /* If no image passed set default background */
  return (
    <>
      <Accordion
        className="rounded-2xl bg-cover shadow-lg"
        type="single"
        collapsible
      >
        <AccordionItem value="item-1">
          <div
            className="z-10 rounded-2xl py-5"
            /* If there is an image, set it, else use default colour */
            style={
              content
                ? {
                    backgroundImage: `url(${content})`,
                    backgroundSize: "100% 400%",
                    backgroundRepeat: "no-repeat",
                  }
                : { backgroundColor: "rgb(28 25 23 / var(--tw-bg-opacity))" }
            }
          >
            <AccordionTrigger className="z-0 rounded-2xl p-5 font-sans text-xl font-bold text-white">
              {result[0]}
            </AccordionTrigger>
          </div>
          <AccordionContent className="rounded-2xl ">
            <p className="p-5">{result[1]}</p>
            <p className="p-5">This is also aiming content</p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
