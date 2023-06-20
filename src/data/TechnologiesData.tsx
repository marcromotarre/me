import ReactModal from "../components/mr-modals/ReactModal";
import ReduxModal from "../components/mr-modals/ReduxModal";
import JavascriptModal from "../components/mr-modals/JavascriptModal";
import FigmaModal from "../components/mr-modals/FigmaModal";
import GitModal from "../components/mr-modals/GitModal";
import TypescriptModal from "../components/mr-modals/TypescriptModal";
import WebpackModal from "../components/mr-modals/WebpackModal";
import NextModal from "../components/mr-modals/NextModal";
import JestModal from "../components/mr-modals/JestModal";
import NodeModal from "../components/mr-modals/NodeModal";
import CypressModal from "../components/mr-modals/CypressModal";

export default [
  {
    name: "react",
    icon: `icons/technologies/technology-react.svg`,
    modal: <ReactModal />,
  },

  {
    name: "nextjs",
    icon: `icons/technologies/technology-nextjs.svg`,
    modal: <NextModal />,
  },
  {
    name: "nodejs",
    icon: `icons/technologies/technology-nodejs.svg`,
    modal: <NodeModal />,
  },
  {
    name: "webpack",
    icon: `icons/technologies/technology-webpack.svg`,
    modal: <WebpackModal />,
  },
  {
    name: "git",
    icon: `icons/technologies/technology-git.svg`,
    modal: <GitModal />,
  },
  {
    name: "redux",
    icon: `icons/technologies/technology-redux.svg`,
    modal: <ReduxModal />,
  },
  {
    name: "recoil",
    icon: `icons/technologies/technology-recoil.svg`,

    modal: <ReactModal />,
  },
  {
    name: "typescript",
    icon: `icons/technologies/technology-typescript.svg`,
    modal: <TypescriptModal />,
  },

  {
    name: "javascript",
    icon: `icons/technologies/technology-javascript.svg`,
    modal: <JavascriptModal />,
  },
  {
    name: "figma",
    icon: `icons/technologies/technology-figma.svg`,
    modal: <FigmaModal />,
  },
  {
    name: "cypress",
    icon: `icons/technologies/technology-cypress.svg`,
    modal: <CypressModal />,
  },

  {
    name: "jest",
    icon: `icons/technologies/technology-jest.svg`,
    modal: <JestModal />,
  },
  {
    name: "yarn",
    icon: `icons/technologies/technology-yarn.svg`,
    modal: <ReactModal />,
  },
  {
    name: "npm",
    icon: `icons/technologies/technology-npm.svg`,
    modal: <ReactModal />,
  },
  {
    name: "prisma",
    icon: `icons/technologies/technology-prisma.svg`,
    modal: <ReactModal />,
  },
];
