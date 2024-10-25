import { StackItem } from "@/@types";

export const leftStack: Array<StackItem> = [
  {
    name: "React Native",
    image: {
      url: require("../public/react.svg"),
      height: 40,
      width: 40,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
  {
    name: "Express",
    image: {
      url: require("../public/nodejs-icon.svg"),
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
    name: "Azure",
    image: {
      url: require("../public/microsoft-azure.svg"),
      height: 200,
      width: 200,
    },
    className: "bg-gradient-to-r from-purple/20 to-purple-300",
  },
];
