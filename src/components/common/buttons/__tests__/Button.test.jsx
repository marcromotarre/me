import { expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";
import Button from "../Button";
import { RectangleIcon } from "../../icons";

test("Button contains a <button /> HTML Tag", () => {
  const button = render(
    <Button onClick={() => {}} variant="text">
      Text Button
    </Button>
  );
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML).to.exist;
  button.unmount();
});

test("Button is clickable", () => {
  const mockCallback = vi.fn();
  const button = render(
    <Button onClick={mockCallback} variant="text">
      Text Button
    </Button>
  );
  const buttonHTML = button.getByRole("button");
  expect(mockCallback.mock.calls).toHaveLength(0);
  fireEvent.click(buttonHTML);
  expect(mockCallback.mock.calls).toHaveLength(1);
  button.unmount();
});

test("Button text", async () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.innerText).toBe("Text Button");
  button.unmount();
});

test("Button without text", () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-text")).toBeFalsy();
  button.unmount();
});

test("Start Icon Button", async () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("End Icon Button", async () => {
  const button = render(<Button endIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});

test("Start Icon Button with text", async () => {
  const button = render(
    <Button startIcon={<RectangleIcon />}>Icon Text Button</Button>
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
    <Button endIcon={<RectangleIcon />}>Icon Text Button</Button>
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

test("Button text variant", async () => {
  const button = render(<Button variant="text">Icon Text Button</Button>);
  expect(button);
  button.unmount();
});
