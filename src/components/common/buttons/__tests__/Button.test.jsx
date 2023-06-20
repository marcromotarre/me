import { expect, test } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
import { ReactIcon } from "../../icons";

test("Button contains a button HTML Tag", async () => {
  const button = render(
    <Button onClick={() => {}} variant="text">
      Text Button
    </Button>
  );
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML).to.exist;
  button.unmount();
});

test("Button is clickable", async () => {
  const button = render(
    <Button onClick={() => {}} variant="text">
      Text Button
    </Button>
  );
  fireEvent.click(button);
  button.unmount();
});

test("Button text", async () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.innerText).toBe("Text Button");
  expect(buttonText).toBe("Text Button");
  button.unmount();
});

test("Button without text", () => {
  const button = render(<Button startIcon={<ReactIcon />} />);
  expect(button.queryByTestId("button-text")).toBeFalsy();
  button.unmount();
});

test("Start Icon Button", async () => {
  const button = render(<Button startIcon={<ReactIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("End Icon Button", async () => {
  const button = render(<Button endIcon={<ReactIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("Start Icon Button with text", async () => {
  const button = render(
    <Button startIcon={<ReactIcon />}>Icon Text Button</Button>
  );
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(2);
  const buttonIcon = buttonContent.children[0];
  const buttonText = buttonContent.children[1];
  expect(buttonText.innerText).toBe("Icon Text Button");
  expect(buttonIcon.tagName).toBe("SVG");
  button.unmount();
});

test("End Icon Button with text", async () => {
  const button = render(
    <Button endIcon={<ReactIcon />}>Icon Text Button</Button>
  );
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(2);
  const buttonText = buttonContent.children[0];
  const buttonIcon = buttonContent.children[1];
  expect(buttonText.innerText).toBe("Icon Text Button");
  expect(buttonIcon.tagName).toBe("SVG");
  button.unmount();
});
