import React from "react";
import { LinkGenerateEffect } from "./ui/link-generate-effect";
import { Link } from "@/@types";

const links: Link[] = [
  {
    source: "Google Drive",
    url: "https://drive.google.com/drive/folders/1XIy16lkct4SWBFdiDvR8sPdjerZ5owxG?usp=sharing",
  },
];

const DownloadApp = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      {links.map((each) => (
        <div key={each.url}>
          <LinkGenerateEffect link={each} />
        </div>
      ))}
    </div>
  );
};

export default DownloadApp;
