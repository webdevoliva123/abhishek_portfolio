import React from "react";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magic-button";

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      {/* SPOTLIGHT */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vh] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
      </div>
      {/* GRID */}
      <div className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.03] bg-grid-black/[0.02] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>
      {/*  */}
      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center ">
            <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-96">Crafting Websites with Full-Stack Skills</h2>
            <TextGenerateEffect words="Bringing Ideas to Life with Intuitive User Interfaces." className="text-center !text-[40px] md:!text-5xl lg:!text-6xl"/>
            <p className="mb-4 text-sm md:text-md lg:text-xl text-center">Hi, I&apos;m Abhishek Yadav a Full Stack Developer based in Mumbai, India.</p>
            <a href="#about-me">
                <MagicButton title="Show My Work" position="right" icon={<span className="text-sm md:text-md lg:text-xl">🚀</span>} />
            </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
