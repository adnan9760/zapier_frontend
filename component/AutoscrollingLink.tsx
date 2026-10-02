"use client";
import React from "react";

interface AutoScrollLinksProps {
  links: { label: string; href: string }[];
  duration?: number;
  reverse?: boolean; 
}

export const AutoScrollLinks: React.FC<AutoScrollLinksProps> = ({
  links,
  duration = 60,
  reverse = false,
}) => {
  return (
    <div className="overflow-hidden whitespace-nowrap w-[80%] mx-auto flex justify-center">
      <div
        className={`flex gap-8 animate-scroll ${
          reverse ? "animate-scroll-reverse" : ""
        }`}
        style={{ ["--duration" as any]: `${duration}s` }}
      >
        {[...links, ...links].map((link, i) => (
          <a
            key={i}
            href={link.href}
            className="bg-white px-5 py-2 rounded-xl shadow-md border border-gray-200 
                   text-gray-800 hover:bg-orange-500 hover:text-white text-lg 
                   font-medium transition-all duration-300"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
};
