export const ButtonSnapshotsCode1 = `
test("renders correct text button", async () => {
  const { asFragment } = render(<Button>TextButton</Button>);
  expect(asFragment()).toMatchSnapshot();
});

`;

export const ButtonSnapshotsCode2 = `
test("renders correct icon button", async () => {
  const { asFragment } = render(<Button startIcon={<RectangleIcon />} />);
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode3 = `
test("renders correct startIcon text button", async () => {
  const { asFragment } = render(
    <Button startIcon={<RectangleIcon />}>TextButton</Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode4 = `
test("renders correct endIcon text button", async () => {
  const { asFragment } = render(
    <Button endIcon={<RectangleIcon />}>TextButton</Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode5 = `
test("renders correct small button", async () => {
  const { asFragment } = render(
    <Button size="small" startIcon={<RectangleIcon />}>
      Small Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode6 = `
test("renders correct medium button", async () => {
  const { asFragment } = render(
    <Button size="medium" startIcon={<RectangleIcon />}>
      Medium Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode7 = `
test("renders correct large button", async () => {
  const { asFragment } = render(
    <Button size="large" startIcon={<RectangleIcon />}>
      Large Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode8 = `
test("renders correct text variant button", async () => {
  const { asFragment } = render(
    <Button variant="text" startIcon={<RectangleIcon />}>
      Large Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode9 = `
test("renders correct text contained button", async () => {
  const { asFragment } = render(
    <Button variant="contained" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode10 = `
test("renders correct text outlined button", async () => {
  const { asFragment } = render(
    <Button variant="outlined" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;

export const ButtonSnapshotsCode11 = `
test("renders correct color button", async () => {
  const { asFragment } = render(
    <Button color="red" secondaryColor="black" startIcon={<RectangleIcon />}>
      Contained Button
    </Button>
  );
  expect(asFragment()).toMatchSnapshot();
});
`;
