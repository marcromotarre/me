import React, { ReactElement, useEffect, useState } from "react";
import classnames from "classnames";
import JavascriptIcon from "../icons/JavascriptIcon";
import CopyIcon from "../icons/CopyIcon";
const Code = ({
  children,
  syntax,
  noHeader = false,
}: {
  children?: ReactElement;
  syntax?: string;
  noHeader?: boolean;
}) => {
  const [copyText, setCopyText] = useState("Copy Code");
  let lines: Array<string> = [];
  if (children?.props?.children) {
    lines = children?.props.children.split("\n");
    if (lines[0].trimStart() === "") lines.shift();
  }

  useEffect(() => {
    if (copyText === "Copied!") {
      const timer = setTimeout(() => {
        // Function to be triggered after two seconds
        setCopyText("Copy Text");
      }, 2000);

      // Clean up the timer when the component unmounts or when the effect runs again
      return () => clearTimeout(timer);
    }
  }, [copyText]);

  const onClickCopy = () => {
    navigator.clipboard.writeText(children?.props.children);
    setCopyText("Copied!");
  };

  const countWhiteSpaces = (line: string): number => {
    return line.length - line.trimStart().length;
  };

  const getMinTab = (lines: Array<string>): number => {
    const tabsInLines = lines.map((line) => countWhiteSpaces(line));
    return Math.min.apply(Math, tabsInLines);
  };

  const tabsPadding = [
    "pl-[0px]",
    "pl-[16px]",
    "pl-[32px]",
    "pl-[48px]",
    "pl-[64px]",
    "pl-[80px]",
    "pl-[96px]",
    "pl-[112px]",
    "pl-[128px]",
    "pl-[142px]",
    "pl-[158px]",
    "pl-[172px]",
  ];

  const minTabs = getMinTab(lines);
  const code = lines.map((line) => ({
    line,
    tabs: countWhiteSpaces(line) - minTabs,
  }));
  return (
    <div className="grid grid-cols-1 rounded-sm bg-black">
      {!noHeader && (
        <div className="flex w-full items-center justify-between bg-[#2E2E38] p-2">
          <div className="grid grid-cols-[min-content_min-content] items-center gap-x-2 pl-3 ">
            <JavascriptIcon size={15} />
            <p className="select-none text-xs font-light text-white">
              Javascript
            </p>
          </div>
          <button
            className="grid grid-cols-[min-content_max-content] items-center gap-x-2 pr-3 "
            onClick={() => onClickCopy()}
          >
            <CopyIcon size={12} color="white" />
            <p className="select-none text-xs font-light text-white">
              {copyText}
            </p>
          </button>
        </div>
      )}
      <div className="grid grid-cols-[min-content_auto] gap-x-8 p-2 pl-4">
        {code.map(({ line, tabs }, index: number) => (
          <React.Fragment key={index}>
            <div className="select-none text-right font-mono text-[#5E646E] sm:text-xs md:sm:text-xs lg:text-base">
              {index + 1}
            </div>
            <div
              className={classnames(
                tabsPadding[tabs],
                "h-[max(24px, max-content)]"
              )}
            >
              <div className="flex flex-wrap">
                <p className="font-mono text-white sm:text-xs md:sm:text-xs lg:text-base">
                  {line.split(" ").map((word: string, index: number) => (
                    <React.Fragment key={index}>
                      <span style={{ color: getColor(word) }}>
                        {word + " "}
                      </span>
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Code;

const getColor = (word: string) => {
  switch (word) {
    case "import":
    case "export":
    case "if":
    case "else":
    case "return":
    case "from":
      return "#B37EB5";
    case "const":
    case "=>":
      return "#5D8FCC";
    case "{":
    case "}":
    case "{}":
    case "(":
    case ")":
    case "()":
      return "#F7D437";
    case ">":
    case "<":
    case "/>":
    case "<p":
    case "<p>":
    case "</p>":
    case "<img>":
    case "<img":
    case "</img>":
      return "#4B6E9A";
    default:
      return "white";
  }
};

/*

const chalk = require('chalk');

function getColorForCharacter(char) {
  if (/[A-Za-z]/.test(char)) {
    return 'yellow';
  } else if (/[0-9]/.test(char)) {
    return 'green';
  } else if (char === '(' || char === ')' || char === '{' || char === '}') {
    return 'cyan';
  } else if (char === '[' || char === ']') {
    return 'magenta';
  } else if (/[<>]/.test(char)) {
    return 'blue';
  } else {
    return 'white';
  }
}

function getColorizedTypeScriptCode(code) {
  let colorizedCode = '';
  for (let i = 0; i < code.length; i++) {
    const char = code[i];
    const color = getColorForCharacter(char);
    colorizedCode += chalk[color](char);
  }
  return colorizedCode;
}

// Usage example:
const fs = require('fs');

// Read the TypeScript file content
const fileContent = fs.readFileSync('path/to/your/file.ts', 'utf-8');

// Get the colorized code
const colorizedCode = getColorizedTypeScriptCode(fileContent);

// Display the colorized code
console.log(colorizedCode);
*/
