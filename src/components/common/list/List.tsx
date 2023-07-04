import React, { ReactElement } from "react";
import ListItem, { ComponentProps as ListItemProps } from "./ListItem";

export default function List({
  children,
  ol = true,
  ul = false,
  styleType = "none",
}: ComponentProps) {
  var listItems = [...(Array.isArray(children) ? children : [children])].filter(
    (child) => child?.props.__TYPE === "ListItem"
  );

  function renderListItems(listItems: React.ReactElement<ListItemProps>[]) {
    console.log(listItems);
    return (
      <>
        {listItems.map((listItem: React.ReactElement<ListItemProps>) =>
          React.cloneElement(listItem, {})
        )}
      </>
    );
  }

  function renderOrderedList(listItems: React.ReactElement<ListItemProps>[]) {
    return (
      <ol className={`grid ${ListStyleTypes[styleType]} gap-y-2 pl-9`}>
        {renderListItems(listItems)}
      </ol>
    );
  }

  function renderUnorderedList(
    listItems?: React.ReactElement<ListItemProps>[]
  ) {
    return (
      <ul className="grid list-[type1] gap-y-2 pl-9">
        {listItems && renderListItems(listItems)}
      </ul>
    );
  }
  return (
    <>{ul ? renderUnorderedList(listItems) : renderOrderedList(listItems)}</>
  );
}

const ListStyleTypes = {
  none: "list-none",
  disc: "list-disc",
  decimal: "list-decimal",
};

type ComponentProps = {
  ul?: boolean;
  ol?: boolean;
  styleType?: "none" | "disc" | "decimal";
  children?:
    | React.ReactElement<ListItemProps>
    | React.ReactElement<ListItemProps>[];
};
