"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";
import { Link } from "@/@types";

export const LinkGenerateEffect = ({
  link,
  className,
}: {
  link: Link;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = link.source.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          return (
            <motion.span
              key={word + idx}
              className={`${
                idx == 1 ? "text-purple" : " dark:text-white text-black"
              } opacity-0`}
            >
              {word}{" "}
            </motion.span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-xl leading-snug tracking-wide">
          <a target="_blank" href={link.url}>
            {renderWords()}
          </a>
        </div>
      </div>
    </div>
  );
};
