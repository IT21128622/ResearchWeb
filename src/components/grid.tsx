"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { docs, projectScope, teams, timeline } from "@/constants/grid";
import {
  FaBug,
  FaChartLine,
  FaExchangeAlt,
  FaGoogleDrive,
  FaSearch,
} from "react-icons/fa";
import { BiCricketBall } from "react-icons/bi";
import { TbCricket } from "react-icons/tb";
import Image from "next/image";
import { leftStack, rightStack } from "@/constants/stack";
import { cn } from "@/utils/cn";
import { students, supervisors } from "@/constants/team";
import MagicButton from "./ui/magic-button";
import { GoDot } from "react-icons/go";
import { CiMail } from "react-icons/ci";
import { GiPropellerBeanie } from "react-icons/gi";
import {
  PiNumberSquareEight,
  PiNumberSquareFive,
  PiNumberSquareFour,
  PiNumberSquareOne,
  PiNumberSquareSeven,
  PiNumberSquareSix,
  PiNumberSquareThree,
  PiNumberSquareTwo,
} from "react-icons/pi";
import { DiOnedrive } from "react-icons/di";
import Link from "next/link";
import { CardGrid, CardGridItem } from "./ui/card-grid";

const Grid = () => {
  const ResearchGapElements = () => {
    const gaps = [
      {
        title: "Analyze Bowling Techniquess",
        description:
          "Identify and refine the bowling action and grip.",
        icon: <BiCricketBall size={20} />,
      },
      {
        title: "Batting Shot Classification",
        description: "Classify and refine batting shots.",
        icon: <TbCricket size={20} />,
      },
      {
        title: " Personalized Training Recommendations",
        description:
          "Get tailored drills to improve performance.",
        icon: <FaChartLine size={20} />,
      },
      {
        title: "Batting Stroke Selection",
        description: "Optimize shot selection for better play.",
        icon: <TbCricket size={20} />,
      },
    ];

    return (
      <div className="flex flex-col antialiased">
        {gaps.map((gap) => (
          <div className="py-4 space-y-1" key={gap.title}>
            <div className="flex gap-2 justify-start items-start text-yellow-500">
              <div className="pt-1">{gap.icon}</div>
              <h2 className="font-medium">{gap.title}</h2>
            </div>
            <p className="text-sm font-light">{gap.description}</p>
          </div>
        ))}
      </div>
    );
  };

  const TechStackElements = () => {
    return (
      <div className="flex flex-col w-full justify-center items-center">
        {/* <Image
          src={require("../public/tech_stack.png")}
          alt="stack"
          className="rounded-full w-32 h-32"
        /> */}
        <div className="flex gap-2 p-2 w-full">
          <div
            className="w-1/2 flex flex-col gap-2 justify-center items-center"
            id="leftStack"
          >
            {leftStack.map((stkIt) => {
              return (
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-20 h-20 drop-shadow p-4 hover:scale-110 transition-all duration-200 ease-in-out",
                    stkIt.className
                  )}
                  key={stkIt.name}
                >
                  <Image
                    className="fill-white"
                    src={stkIt.image.url}
                    alt={stkIt.name}
                    height={stkIt.image.height}
                    width={stkIt.image.width}
                  />
                </div>
              );
            })}
          </div>
          <div
            className="w-1/2 flex flex-col gap-2 justify-center items-center"
            id="rightStack"
          >
            {rightStack.map((stkIt) => {
              return (
                <div
                  className={cn(
                    "rounded-full flex items-center justify-center w-16 h-16 p-4 hover:scale-110 transition-all duration-200 ease-in-out",
                    stkIt.className
                  )}
                  key={stkIt.name}
                >
                  <Image
                    src={stkIt.image.url}
                    alt={stkIt.name}
                    height={stkIt.image.height}
                    width={stkIt.image.width}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  const TeamElements = () => {
    return (
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2" id="leftPanel">
          <h1 className="text-[28px] font-medium ml-6">Developers</h1>
          <div className="flex flex-col gap-2 my-2 p-4">
            {students.map((person) => {
              return (
                <div
                  className="bg-gradient-to-r from-purple/10 to-purple-300 rounded-xl flex gap-4 py-5"
                  key={person.name}
                >
                  <div className="w-1/4 flex items-center justify-center p-2">
                    <Image
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full"
                      src={person.avatar.url}
                      alt={person.avatar.alt}
                    />
                  </div>
                  <div className="w-3/4 flex flex-col gap-1">
                    <h1 className="font-semibold">{person.name}</h1>
                    <div className="flex items-center gap-2">
                      {person.tags.map((each) => (
                        <MagicButton
                          className="h-8 text-xs rounded-full cursor-default"
                          icon={<GoDot />}
                          title={each}
                          key={each}
                        />
                      ))}
                    </div>
                    <h1 className="font-medium text-lg">{person.position}</h1>
                    <h1 className="font-light">{person.organization}</h1>
                    <h1 className="font-semibold">{person.department}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="w-full lg:w-1/2" id="rightPanel">
          <h1 className="text-[28px] font-medium ml-6">Supervisors</h1>
          <div className="flex flex-col gap-2 my-2 p-4">
            {supervisors.map((person) => {
              return (
                <div
                  className="bg-gradient-to-l from-purple/10 to-purple-300 rounded-xl flex gap-4 py-5"
                  key={person.name}
                >
                  <div className="w-1/4 flex items-center justify-center">
                    <Image
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full"
                      src={person.avatar.url}
                      alt={person.avatar.alt}
                    />
                  </div>
                  <div className="w-3/4 flex flex-col gap-1 p-2">
                    <h1 className="font-semibold">{person.name}</h1>
                    <div className="flex items-center gap-2">
                      {person.tags.map((each) => (
                        <MagicButton
                          className="h-8 text-xs rounded-full cursor-default"
                          icon={<GoDot />}
                          title={each}
                          key={each}
                        />
                      ))}
                    </div>
                    <h1 className="font-medium text-lg">{person.position}</h1>
                    <h1 className="font-light">{person.organization}</h1>
                    <h1 className="font-semibold">{person.department}</h1>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  const MethodologyElements = () => {
    return (
      <div className="w-full h-full flex justify-center items-center ">
        <Image
          src={require("../public/methodology1.png")}
          height={800}
          width={800}
          alt=""
          className="my-4 rounded-2xl transition-all duration-500 ease-in-out"
        />
      </div>
    );
  };

  const LiteratureReview = () => {
    const keyPoints = [
      {
        title: "Bowling Grip & Techniques",
        description:
          "Researchers introduced Deep Grip, classifying bowling grips using CNN. The Smart Cricket Ball identified spin deliveries using gyroscopes, while bowler action classification employed CNNs for action recognition. A common limitation across these studies is the lack of methods to rectify identified flaws in bowling techniques.",
      },
      {
        title: "Batting Shot Classification",
        description:
          "Shot-Net achieved 80% accuracy using a 13-layered CNN on 3600 images. A hybrid deep learning approach combined CNN and GRU, reaching 93% accuracy. Studies using VGG-19, Inception v3, and Random Forests demonstrated effectiveness, achieving accuracies from 82% to 99%.",
      },
      {
        title: "Ball Tracking",
        description:
          "Enhanced algorithms like Mask R-CNN achieved 92% accuracy for tracking tennis balls, with potential adaptations for cricket ball tracking.",
      },
      {
        title: "Recommendation Systems",
        description:
          "Training enhancement through recommender systems provides tailored drills, especially beneficial for novice players. Collaborative Filtering (CF) leverages past interactions but faces cold-start issues, while Content-Based Filtering (CBF) matches drills to skills based on attributes. Hybrid approaches merge CF and CBF for improved accuracy, addressing cold-start problems.",
      },
    ];
  
    return (
      <div>
        <h1 className="font-light py-4 gap-6">
          There have been extensive studies utilizing machine learning, deep learning, and AI to improve cricket performance, focusing on areas like bowling techniques, batting shot classification, ball tracking, and recommendation systems. These studies enhance training and provide actionable insights.
        </h1>
        {keyPoints.map((point) => {
          return (
            <h2
              key={point.title}
              className="flex flex-col my-4 p-4 bg-gradient-to-l from-purple/10 to-purple-300 rounded-2xl backdrop-blur-md"
            >
              <span className="text-yellow-500">{point.title}</span>
              <span className="text-sm font-light">{point.description}</span>
            </h2>
          );
        })}
      </div>
    );
  };
  

  return (
    <div className="w-full">
      <section id="about-project" className="min-h-screen py-10">
        <h2 className="text-[40px] font-bold my-10 text-center">
          Project Scope
        </h2>
        <BentoGrid>
          {projectScope.map(({ className, description, id, title }) => (
            <BentoGridItem
              id={id}
              key={id}
              title={title}
              description={description}
              className={className}
            >
              {id == 1 && <LiteratureReview />}
              {id == 2 && <ResearchGapElements />}
              {id == 3 && <TechStackElements />}
              {id == 4 && <MethodologyElements />}
            </BentoGridItem>
          ))}
        </BentoGrid>
      </section>
      <section id="timeline" className="min-h-screen py-16">
        <h2 className="text-[40px] font-bold my-10 text-center">Timeline</h2>
        <BentoGrid>
          {timeline.map(
            ({
              className,
              description,
              id,
              img,
              imgClassName,
              spareImg,
              title,
              titleClassName,
              altDescription,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
              >
                <h1 className="font-thin">{altDescription}</h1>
                <div className="my-1 text-yellow-500">
                  {id == 1 && <PiNumberSquareOne size={20} />}
                  {id == 2 && <PiNumberSquareTwo size={20} />}
                  {id == 3 && <PiNumberSquareThree size={20} />}
                  {id == 4 && <PiNumberSquareFour size={20} />}
                  {id == 5 && <PiNumberSquareFive size={20} />}
                  {id == 6 && <PiNumberSquareSix size={20} />}
                  {id == 7 && <PiNumberSquareSeven size={20} />}
                  {id == 8 && <PiNumberSquareEight size={20} />}
                </div>
              </BentoGridItem>
            )
          )}
        </BentoGrid>
      </section>

      <section id="docs" className="py-48">
        <h2 className="text-[40px] font-bold my-10 text-center">Docs</h2>
        <CardGrid>
          {docs.map(
            ({
              className,
              id,
              title,
              link,
              altDescription
            }) => (
              <CardGridItem
                id={id}
                key={id}
                title={title}
                link={link}
                className={className}
                altDescription={altDescription}
              >
                <div className="flex flex-col items-center justify-center gap-4">
                  <div className="flex flex-col md:flex-row items-center gap-2">
                    
                  </div>
                </div>
              </CardGridItem>
            )
          )}
        </CardGrid>
      </section>

      <section id="team" className="min-h-screen py-16">
        <h2 className="text-[40px] font-bold my-10 text-center">Team</h2>
        <BentoGrid>
          {teams.map(
            ({
              className,
              description,
              id,
              img,
              imgClassName,
              spareImg,
              title,
              titleClassName,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
              >
                <TeamElements />
              </BentoGridItem>
            )
          )}
        </BentoGrid>
      </section>
    </div>
  );
};

export default Grid;
