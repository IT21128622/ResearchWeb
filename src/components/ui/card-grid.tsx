"use client";

import { ReactNode } from "react";
import { cn } from "@/utils/cn";
import { FaRegFilePdf, FaRegFilePowerpoint } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import MagicButton from "./magic-button";

// Flex layout to ensure consistent three-card row
export const CardGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "flex flex-wrap justify-center gap-8 mx-auto",
        className
      )}
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
      }}
    >
      {children}
    </div>
  );
};

export const CardGridItem = ({
  className,
  id,
  title,
  titleClassName,
  children,
  link,
  altDescription,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
  children?: ReactNode;
  link?: string;
  altDescription?: string;
}) => {
  const getIcon = () => {
    if (altDescription === "Document") {
      return <FaRegFilePdf size={50} className="text-purple mx-auto mb-4" />;
    }
    if (altDescription === "Presentation") {
      return <FaRegFilePowerpoint size={50} className="text-purple mx-auto mb-4" />;
    }
    return null;
  };

  const handleDownload = () => {
    if (link) {
      const anchor = document.createElement("a");
      anchor.href = link;
      anchor.target = "_blank";
      anchor.rel = "noopener noreferrer";
      anchor.click();
    }
  };

  return (
    <div
      className={cn(
        "relative w-80 overflow-hidden rounded-3xl border border-white/[0.1] bg-gray-800 group hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105 shadow-input dark:shadow-none flex flex-col justify-between p-6",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundImage:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className="flex flex-col items-center">
        {getIcon()}
        <div
          className={`font-sans text-lg lg:text-2xl font-bold text-white text-center`}
        >
          {title}
        </div>
        <div className="py-1 text-gray-300 text-center">{children}</div>
      </div>
      <div className="flex justify-center">
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="mt-4"
  >
    <MagicButton title={"Download"} icon={<FiDownload size={20} />}>
      Download
    </MagicButton>
  </a>
</div>
    </div>
  );
};
