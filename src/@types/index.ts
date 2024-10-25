import { ReactElement } from "react";

type NavBarItem = {
  name: string;
  link: string;
  icon?: ReactElement | JSX.Element;
};

export type NavBar = Array<NavBarItem>;

export type Link = {
  source: string;
  url: string;
};

export type StackItem = {
  name: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
  className?: string;
};

export type Member = {
  name: string;
  avatar: {
    url: string;
    alt: string;
  };
  tags: Array<string>;
  organization: string;
  position?: string;
  department: string;
  contact: {
    linkedIn: string;
    email: string;
  };
};
