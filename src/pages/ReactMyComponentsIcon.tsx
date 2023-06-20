import Header from "../components/Header";
import Title from "../components/common/Title";
import classnames from "classnames";
import {
  ReactIcon,
  ReduxIcon,
  FigmaIcon,
  GitIcon,
  TypescriptIcon,
  JavascriptIcon,
  WebpackIcon,
  NextIcon,
  JestIcon,
  NodeIcon,
  YarnIcon,
  NpmIcon,
  CypressIcon,
  PrismaIcon,
  GithubIcon,
  RecoilIcon,
} from "../components/common/icons";
import { cloneElement } from "react";
import Code from "../components/common/code/Code";

const ReactMyComponentsIcon = () => {
  const icons = [
    { component: ReactIcon, icon: <ReactIcon />, size: 40 },
    { component: GitIcon, icon: <GitIcon />, size: 40 },
    { component: ReduxIcon, icon: <ReduxIcon />, size: 40 },
    { component: FigmaIcon, icon: <FigmaIcon />, size: 40 },
    { component: RecoilIcon, icon: <RecoilIcon />, size: 40 },
    { component: TypescriptIcon, icon: <TypescriptIcon />, size: 40 },
    { component: JavascriptIcon, icon: <JavascriptIcon />, size: 40 },
    { component: WebpackIcon, icon: <WebpackIcon />, size: 40 },
    { component: NextIcon, icon: <NextIcon />, size: 40 },
    { component: JestIcon, icon: <JestIcon />, size: 40 },
    { component: NodeIcon, icon: <NodeIcon />, size: 40 },
    { component: YarnIcon, icon: <YarnIcon />, size: 40 },
    { component: NpmIcon, icon: <NpmIcon />, size: 40 },
    { component: CypressIcon, icon: <CypressIcon />, size: 40 },
    { component: PrismaIcon, icon: <PrismaIcon />, size: 40 },
    { component: GithubIcon, icon: <GithubIcon />, size: 40 },
  ];

  return (
    <div className="grid grid-cols-1 gap-y-4 p-8">
      <Title icon={<ReactIcon size={30} />} title="React My Components" />
      <p className="text-xl">Icon</p>
      <p className="font-light">
        In order to have all icons grouped by a single import I created an index
        file and export them
      </p>
      <Code>
        <div>{`
import React from "./ReactIcon";
import Git from "./GitIcon";
import Typescript from "./TypescriptIcon";
// ... more icons


export const ReactIcon = React;
export const GitIcon = Git;
export const TypescriptIcon = Typescript;
// ... more icons


const Icons = {
  ReactIcon: ReactIcon,
  GitIcon: GitIcon,
  TypescriptIcon: TypescriptIcon,
  // ... more icons
};

export default Icons;
          `}</div>
      </Code>
      <p className="font-light">
        So if you want to use an icon just need to import them
      </p>
      <Code>
        <div>{`import { YarnIcon } from "../components/common/icons";`}</div>
      </Code>
      <p className="font-light">{`You can edit some Icon properties such as colors and size`}</p>
      <div className="display grid grid-cols-1 gap-y-5">
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon className="align-self-center self-center justify-self-center" />
          <Code noHeader>
            <>{`<YarnIcon />`}</>
          </Code>
        </div>
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon className="self-center justify-self-center" size={30} />
          <Code noHeader>
            <>{`<YarnIcon size={30} />`}</>
          </Code>
        </div>
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon className="self-center justify-self-center" size={40} />
          <Code noHeader>
            <>{`<YarnIcon size={40} />`}</>
          </Code>
        </div>
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon
            className="self-center justify-self-center"
            size={40}
            catColor={"yellow"}
          />
          <Code noHeader>
            <>{`<YarnIcon catColor={"yellow"} size={30} />`}</>
          </Code>
        </div>
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon
            className="self-center justify-self-center"
            size={40}
            color={"green"}
          />
          <Code noHeader>
            <>{`<YarnIcon size={30} color={"green"} />`}</>
          </Code>
        </div>
        <div className="display grid grid-cols-[80px_auto]">
          <YarnIcon
            className="self-center justify-self-center"
            size={40}
            circleColor={"transparent"}
          />
          <Code noHeader>
            <>{`<YarnIcon size={30} circleColor={"transparent"}  />`}</>
          </Code>
        </div>
      </div>
      <p className="font-light">Example of Yarn icon:</p>
      <Code>
        <>{`const YarnIcon = ({
  color,
  lineColor = "white",
  circleColor = "#3A99C6",
  catColor = "#3A99C6",
  size = 20,
  className = "",
}: {
  color?: string;
  lineColor?: string;
  circleColor?: string;
  catColor?: string;
  size?: number;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 122 122"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M37.0356 17.4286L92.5892 21.7857L105.661 77.3393L91.4999 104.571H25.0535L21.7856 61L37.0356 17.4286Z"
        fill={color ? "transparent" : lineColor}
      />
      <path
        d="M61 0C27.3229 0 0 27.3229 0 61C0 94.6771 27.3229 122 61 122C94.6771 122 122 94.6771 122 61C122 27.3229 94.6771 0 61 0ZM64.904 20.8671C65.8342 20.8671 66.7493 21.1365 67.5728 21.6652C68.2082 22.0871 69.0317 22.6056 71.4107 27.5313C72.9865 27.084 73.7897 27.3178 74.2116 27.4347C75.2486 27.7194 76.0721 28.4006 76.5652 29.341C78.9899 34.0024 79.3203 42.3187 78.263 47.6664C77.0379 53.9291 74.4251 57.9805 72.5138 60.7611C74.1608 62.4335 76.4686 65.331 78.1918 70.0382C79.605 73.9727 79.7677 77.5513 79.5796 80.2811C80.6334 79.7877 81.6554 79.2292 82.6397 78.6087C85.6542 76.7482 90.1987 73.9472 95.6175 73.8761C99.247 73.8303 102.068 76.1382 102.495 79.483C102.702 81.0282 102.324 82.5948 101.435 83.8756C100.546 85.1564 99.2112 86.059 97.6915 86.4065C94.3924 87.2097 92.8623 87.8197 88.4347 90.6917C82.1721 94.7432 75.5282 97.0053 73.1237 97.7576C72.0842 98.6116 70.8583 99.2089 69.5451 99.5012C65.7987 100.421 52.9429 101.102 51.9262 101.102H51.6924C47.7122 101.102 45.5212 99.8773 44.3216 98.6065C40.9767 100.279 36.6457 99.5723 33.5347 97.9253C32.4767 97.3973 31.6179 96.5411 31.0865 95.4848C30.5551 94.4284 30.3797 93.2285 30.5864 92.0642C30.2948 91.7606 30.0342 91.4285 29.8087 91.073C28.9852 89.8022 27.1247 86.315 27.5008 81.1808C27.7855 77.5056 30.3272 74.2319 31.9742 72.4883C31.8556 68.5627 32.5622 64.6558 34.0482 61.0203C35.6037 57.3247 38.5469 54.168 40.7582 52.1906C39.1315 49.4608 37.4845 45.2417 39.0858 40.9564C40.2397 37.8962 41.1801 36.1984 43.2541 35.4664H43.2287C44.2402 35.0903 45.2061 34.6887 45.6992 34.1498C48.7244 30.8445 52.9095 28.8357 57.3807 28.5429C57.5688 28.0702 57.7823 27.6025 58.0161 27.1043C59.5919 23.7595 61.2643 21.8736 63.2214 21.167C63.7546 20.9668 64.3192 20.8635 64.8888 20.862L64.904 20.8671ZM64.9345 24.4254C62.3573 24.5067 59.8461 32.147 59.8461 32.147C59.8461 32.147 53.3902 31.11 48.3272 36.5746C47.3157 37.6828 45.9482 38.2724 44.5351 38.8113C44.1335 38.9536 43.6404 38.9282 42.4153 42.2272C40.5294 47.2648 45.5924 52.8717 45.5924 52.8717C45.5924 52.8717 39.5636 57.1367 37.3269 62.4335C34.8564 68.2488 35.6087 73.9269 35.6087 73.9269C35.6087 73.9269 31.3235 77.6479 31.0388 81.4858C30.7796 84.8561 31.7454 87.5858 32.7824 89.1871C33.9363 90.9307 35.3749 90.0817 35.3749 90.0817C35.3749 90.0817 32.5232 93.4012 35.1868 94.8143C37.6116 96.0852 41.7087 96.8172 43.8793 94.6262C45.4552 93.0504 45.7653 89.5378 46.3498 88.1043C46.4922 87.7739 46.9598 88.6686 47.4122 89.1159C47.9053 89.5887 48.7542 90.1072 48.7542 90.1072C48.7542 90.1072 44.9163 91.7542 46.4922 95.526C47.0107 96.7765 48.8712 97.5746 51.911 97.5492C53.0395 97.5237 65.453 96.8426 68.7521 96.0445C70.6583 95.5972 71.3192 94.6059 71.3192 94.6059C71.3192 94.6059 79.2797 92.415 86.559 87.7078C91.2204 84.668 93.1318 83.8445 96.8985 82.9498C100.01 82.1975 99.796 77.3683 95.6734 77.4395C91.4085 77.4852 87.6672 79.6762 84.5104 81.6332C78.5985 85.2831 75.6553 85.0493 75.6553 85.0493L75.5637 84.8866C75.1622 84.2257 77.4497 78.3138 74.8826 71.2734C72.102 63.5722 67.6998 61.7117 68.0506 61.122C69.5603 58.5803 73.3271 54.5289 74.8317 46.9903C75.7264 42.4204 75.4926 34.9072 73.4643 30.9727C73.0882 30.2407 69.7433 32.1978 69.7433 32.1978C69.7433 32.1978 66.612 25.2286 65.7377 24.6592C65.5021 24.5009 65.2183 24.4193 64.9345 24.4254Z"
        fill={color ? color : circleColor}
      />
      <path
        d="M64.9237 24.5009C62.3476 24.5821 59.8375 32.2093 59.8375 32.2093C59.8375 32.2093 53.3844 31.1741 48.3236 36.6294C47.3124 37.7357 45.9456 38.3243 44.5331 38.8622C44.1316 39.0043 43.6388 38.9789 42.4142 42.2724C40.5291 47.3014 45.5899 52.8988 45.5899 52.8988C45.5899 52.8988 39.5637 57.1564 37.328 62.4442C34.8585 68.2496 35.6106 73.918 35.6106 73.918C35.6106 73.918 31.3272 77.6327 31.0426 81.464C30.7835 84.8286 31.7489 87.5537 32.7854 89.1522C33.9389 90.8928 35.3768 90.0453 35.3768 90.0453C35.3768 90.0453 32.5263 93.3591 35.1888 94.7698C37.6125 96.0385 41.7079 96.7693 43.8776 94.5821C45.4527 93.0089 45.7627 89.5023 46.347 88.0713C46.4893 87.7414 46.9568 88.6346 47.409 89.0811C47.9019 89.5531 48.7504 90.0707 48.7504 90.0707C48.7504 90.0707 44.9141 91.7149 46.4893 95.4803C47.0076 96.7287 48.8673 97.5254 51.9058 97.5C53.0338 97.4746 65.442 96.7946 68.7396 95.9979C70.6451 95.5513 71.3056 94.5618 71.3056 94.5618C71.3056 94.5618 79.2627 92.3746 86.5389 87.6754C91.1983 84.6408 93.1088 83.8187 96.874 82.9256C99.9836 82.1745 99.7702 77.3536 95.6494 77.4246C91.3863 77.4703 87.6466 79.6575 84.4912 81.6112C78.5818 85.2548 75.6399 85.0214 75.6399 85.0214L75.5484 84.859C75.147 84.1993 77.4335 78.2975 74.8675 71.269C72.0881 63.5809 67.6879 61.7236 68.0385 61.1349C69.5476 58.5976 73.3127 54.5531 74.8167 47.0274C75.711 42.4652 75.4773 34.9649 73.4499 31.0371C73.0739 30.3063 69.7305 32.2601 69.7305 32.2601C69.7305 32.2601 66.6005 25.3027 65.7265 24.7344C65.491 24.5763 65.2074 24.4948 64.9237 24.5009Z"
        fill={color ? color : catColor}
      />
    </svg>
  );
};

export default YarnIcon;
`}</>
      </Code>
      <p className="font-light">In a simple way you can edit all icons props</p>
      <div className="relative h-[300px] max-w-[100vw]">
        <div className="absolute left-[-32px] max-w-[100vw] overflow-x-scroll pl-[32px] ">
          <div className="flex max-w-[100vw] flex-shrink items-center justify-start">
            {icons.map(({ icon, size }, index) => (
              <div
                key={index}
                className="m-2 flex
              h-[60px]
              w-[60px]
              min-w-[60px]
              items-center
              justify-center p-2"
              >
                {cloneElement(icon, { size })}
              </div>
            ))}
          </div>
          <div className="flex max-w-[100vw] flex-shrink items-center justify-start">
            {icons.map(({ icon, size }, index) => (
              <div
                key={index}
                className="m-2 flex
                h-[60px]
                w-[60px]
                min-w-[60px]
                items-center
                justify-center rounded-lg bg-[#326EAC] p-2"
              >
                {cloneElement(icon, { size, color: "white" })}
              </div>
            ))}
          </div>
          <div className="flex max-w-[100vw] flex-shrink items-center justify-start">
            {icons.map(({ icon, size }, index) => (
              <div
                key={index}
                className="m-2 flex
                h-[60px]
                w-[60px]
                min-w-[60px]
                items-center
                justify-center  p-2"
              >
                {cloneElement(icon, { size, color: "black" })}
              </div>
            ))}
          </div>
          <div className="flex max-w-[100vw] flex-shrink items-center justify-start">
            {icons.map(({ icon, size }, index) => (
              <div
                key={index}
                className="m-2 flex
                h-[60px]
                w-[60px]
                min-w-[60px]
                items-center
                justify-center  p-2"
              >
                {cloneElement(icon, { size, color: "#326EAC" })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReactMyComponentsIcon;
