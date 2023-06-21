export const ButtonSnapshotsCode1 = `
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
`;

export const ButtonSnapshotsCode2 = `
test("Button is clickable", () => {
  const mockCallback = vi.fn();
  const button = render(<Button onClick={mockCallback}>Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(mockCallback.mock.calls).toHaveLength(0);
  fireEvent.click(buttonHTML);
  expect(mockCallback.mock.calls).toHaveLength(1);
  button.unmount();
});
`;

export const ButtonSnapshotsCode3 = `
test("Button is hoverable", async () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  fireEvent.mouseEnter(buttonHTML);
  expect(buttonHTML.getAttribute("style")).equals("background-color: white;");
  fireEvent.mouseLeave(buttonHTML);
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});
`;

export const ButtonSnapshotsCode4 = `
test("Button text", async () => {
  const button = render(<Button variant="text">Text Button</Button>);
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.innerText).toBe("Text Button");
  button.unmount();
});
`;

export const ButtonSnapshotsCode5 = `
test("Button without text", () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-text")).toBeFalsy();
  button.unmount();
});
`;

export const ButtonSnapshotsCode6 = `
test("Start Icon Button", async () => {
  const button = render(<Button startIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});
`;

export const ButtonSnapshotsCode7 = `
test("End Icon Button", async () => {
  const button = render(<Button endIcon={<RectangleIcon />} />);
  expect(button.queryByTestId("button-end-icon")).toBeFalsy();
  const buttonContent = await button.findByTestId("button-content");
  expect(buttonContent.children.length).equal(1);
  button.unmount();
});
`;

export const ButtonSnapshotsCode8 = `
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
`;

export const ButtonSnapshotsCode9 = `
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
`;

export const ButtonSnapshotsCode10 = `
test("Button text variant", () => {
  const button = render(<Button variant="text">Icon Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});
`;

export const ButtonSnapshotsCode11 = `
test("Button outlined variant", () => {
  const button = render(<Button variant="outlined">Icon Text Button</Button>);
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals(
    "background-color: transparent;"
  );
  button.unmount();
});
`;

export const ButtonSnapshotsCode12 = `
test("Button small size", async () => {
  const button = render(
    <Button size="small" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.getAttribute("class")).includes("text-sm");
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("15");
  button.unmount();
});
`;

export const ButtonSnapshotsCode13 = `
test("Button medium size", async () => {
  const button = render(
    <Button size="medium" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.getAttribute("class")).includes("text-base");
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("20");
  button.unmount();
});
`;

export const ButtonSnapshotsCode14 = `
test("Button large size", async () => {
  const button = render(
    <Button size="large" startIcon={<RectangleIcon />}>
      Icon Text Button
    </Button>
  );
  const buttonText = await button.findByTestId("button-text");
  expect(buttonText.getAttribute("class")).includes("text-xl");
  const buttonContent = await button.findByTestId("button-content");
  const buttonIcon = buttonContent.children[0];
  expect(buttonIcon.getAttribute("width")).equals("25");
  button.unmount();
});
`;

export const ButtonSnapshotsCode15 = `
test("Button colored", () => {
  const button = render(
    <Button startIcon={<RectangleIcon />} color="error" secondaryColor="yellow">
      Icon Text Button
    </Button>
  );
  const buttonHTML = button.getByRole("button");
  expect(buttonHTML.getAttribute("style")).equals("background-color: #d32f2f;");
  button.unmount();
});
`;
