import { StackItem } from "@/@types";

export const leftStack: Array<StackItem> = [
  {
    name: "Next Js",
    image: {
      url: require("../public/nextjs.svg"),
      height: 40,
      width: 40,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Python",
    image: {
      url: require("../public/python.svg"),
      height: 150,
      width: 150,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Flask",
    image: {
      url: require("../public/flask.svg"),
      height: 150,
      width: 150,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Docker",
    image: {
      url: require("../public/docker-icon.svg"),
      height: 200,
      width: 200,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
];

export const rightStack: Array<StackItem> = [
  {
    name: "Git",
    image: {
      url: require("../public/git-icon.svg"),
      height: 200,
      width: 200,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Tensorflow",
    image: {
      url: require("../public/tensorflow.svg"),
      height: 200,
      width: 200,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "MongoDB",
    image: {
      url: require("../public/mongodb-icon.svg"),
      height: 150,
      width: 150,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Open CV",
    image: {
      url: require("../public/opencv.svg"),
      height: 200,
      width: 200,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
];
