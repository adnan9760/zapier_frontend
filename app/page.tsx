"use client";
import Image from "next/image";
import { AppBar } from "@/component/AppBar";
import { HeroSection } from "@/component/Hero";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { AutoScrollLinks } from "@/component/AutoscrollingLink";
import Adnan from "../component/assets/adnan.png"
import { useState } from "react";
export default function Home() {
   const row1 = [
    { label: "Onboard employees", href: "/Login" },
    { label: "Resolve IT tickets", href: "/Login" },
    { label: "Qualify leads", href: "/Login" },
    { label: "Support sales reps", href: "/Login" },
    { label: "Answer FAQs", href: "/Login" },
    { label: "Assist customers", href: "/Login" },
    { label: "Repurpose content", href: "/Login" },
  ];
  const testimonials = [
    {
      quote: "This platform completely changed our workflow!",
      name: "Adnan Qadri",
      designation: "Full Stack Developer",
      src: {Adnan},
    },
    {
      quote: "Fast, reliable, and super intuitive!",
      name: " Akram Khan",
      designation: "Senior Developer",
      src:'../component/assets/Ansab.png',
    },
    {
      quote: "Zapier contributes to an overhead savings of around $500,000+ on an annual basis",
      name: "Farhan Khan",
      designation: "UI/UX Designer",
      src:'../component/assets/farhan.png',
    },
  ];
  const[login , setlogin] = useState(false);
  return (
    <div className="w-[stretch] bg-[#fffaf5]">
    <AppBar login={login}></AppBar>
    <HeroSection></HeroSection>
    <AnimatedTestimonials testimonials={testimonials} autoplay={false}></AnimatedTestimonials>
    <AutoScrollLinks  links={row1} duration={70}></AutoScrollLinks>
    </div>
  );
}
