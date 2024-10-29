"use client";

import MagicButton from "./ui/magic-button";
import { Spotlight } from "./ui/spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { FaChrome } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="h-screen pb-20 pt-48">
      {/**
       *  UI: Spotlights
       *  Link: https://ui.aceternity.com/components/spotlight
       */}
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/**
       *  UI: grid
       *  change bg color to bg-black-100 and reduce grid color from
       *  0.2 to 0.03
       */}
      <div
        className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        {/* Radial gradient for the container to give a faded look */}
        <div
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            A Work By R24-038 Team
          </p>

          {/**
           *  Link: https://ui.aceternity.com/components/text-generate-effect
           *
           *  change md:text-6xl, add more responsive code
           */}
          <TextGenerateEffect
            words="CricBoost AI-Driven Cricket Insights & Performance Analytics"
            className="text-center text-[40px] md:text-5xl lg:text-6xl"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl ">
          Analyze, Adapt, Achieve - The Smart Way to Play
          </p>

          <a href="#about">
            {/* <MagicButton
              title="Show my work"
              icon={<FaLocationArrow />}
              position="right"
            /> */}
          </a>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center relative z-10 gap-2">
        <Link href={"https://cric-boost.vercel.app"} target="_self">
          <MagicButton
            className="w-72 lg:w-80"
            title="Get Started"
            icon={<FaChrome />}
          />
        </Link>
        {/* <MagicButton
          className="border-slate-200 w-72 lg:w-80"
          title="Not Available For IOS"
          disabled
          icon={<FaAppStoreIos />}
        /> */}
      </div>
    </div>
  );
};

export default Hero;
