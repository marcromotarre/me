import { describe, expect, test, vi } from "vitest";
import { fireEvent, render } from "@testing-library/react";

import Breadcrumb from "../Breadcrumb";
import BreadcrumbLink from "../BreadcrumbLink";
import { BrowserRouter } from "react-router-dom";
import { RectangleIcon } from "../../icons";

const navigateMock = vi.fn();
vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual("react-router-dom");
  const mock = {
    ...actual,
    useNavigate: () => {
      return navigateMock;
    },
  };
  return mock;
});

describe("<Breadcrumb />", () => {
  test("should render the component", () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    breadcrumb.unmount();
  });

  test("Breadcrumb with only one BreadcrumbLink", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink>Section1</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    expect(breadcrumbComponent.children.length).equals(1);

    expect(breadcrumbComponent.children[0].innerText).equals("Section1");

    breadcrumb.unmount();
  });

  test("Breadcrumb contains BreadcrumbLinks & Breadcrumbs separators", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    expect(breadcrumbComponent.children.length).equals(5);

    expect(breadcrumbComponent.children[0].innerText).equals("Section1");

    expect(breadcrumbComponent.children[1].getAttribute("data-testid")).equals(
      "breadcrumb-separator"
    );

    expect(breadcrumbComponent.children[2].innerText).equals("Section1.2");

    expect(breadcrumbComponent.children[3].getAttribute("data-testid")).equals(
      "breadcrumb-separator"
    );
    expect(breadcrumbComponent.children[4].innerText).equals("Section1.2.3");

    breadcrumb.unmount();
  });

  test("Breadcrumb default separator is /", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbSeparators = await breadcrumb.findAllByTestId(
      "breadcrumb-separator"
    );

    breadcrumbSeparators.forEach((breadcrumbSeparator) => {
      expect(breadcrumbSeparator.innerText).equals("/");
    });

    breadcrumb.unmount();
  });

  test("Breadcrumb can change text separator", async () => {
    const breadcrumb = render(
      <Breadcrumb separator="-">
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbSeparators = await breadcrumb.findAllByTestId(
      "breadcrumb-separator"
    );

    breadcrumbSeparators.forEach((breadcrumbSeparator) => {
      expect(breadcrumbSeparator.innerText).equals("-");
    });

    breadcrumb.unmount();
  });

  test("Breadcrumb can change icon separator", async () => {
    const breadcrumb = render(
      <Breadcrumb separator={<RectangleIcon />}>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbSeparators = await breadcrumb.findAllByTestId(
      "breadcrumb-separator"
    );

    breadcrumbSeparators.forEach((breadcrumbSeparator) => {
      expect(
        breadcrumbSeparator.children[0].getAttribute("data-testid")
      ).equals("rectangle-icon");
    });

    breadcrumb.unmount();
  });

  test("Breadcrumb can add icon in BreadcrumbLink", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink icon={<RectangleIcon />}>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
        <BreadcrumbLink>Section1.2.3</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    const breadcrumbLinkIcon = breadcrumbComponent.children[0].children[0];
    const breadcrumbLinkText = breadcrumbComponent.children[0].children[1];
    expect(breadcrumbLinkIcon.getAttribute("data-testid")).equals(
      "rectangle-icon"
    );
    expect(breadcrumbLinkText.innerText).equals("Section1");
    breadcrumb.unmount();
  });

  test("Breadcrumb can set a color", async () => {
    const breadcrumb = render(
      <Breadcrumb style={{ color: "green" }}>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink>Section1.2</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    expect(breadcrumbComponent.getAttribute("style")).contains("color: green");
    const breadcrumbLink = breadcrumbComponent.children[0];
    const breadcrumbSeparator = breadcrumbComponent.children[1];
    const breadcrumbSeparatorText = breadcrumbSeparator.children[0];

    expect(breadcrumbLink.getAttribute("data-testid")).equals(
      "breadcrumb-link"
    );
    expect(breadcrumbLink.getAttribute("style")).contains("color: green");
    expect(breadcrumbSeparator.getAttribute("data-testid")).equals(
      "breadcrumb-separator"
    );
    expect(breadcrumbSeparatorText.getAttribute("style")).contains(
      "color: green"
    );

    breadcrumb.unmount();
  });

  test("Breadcrumb can set different colors to BreadcrumbLinks", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink style={{ color: "red" }}>Section1</BreadcrumbLink>
        <BreadcrumbLink style={{ color: "blue" }}>Section1.2</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );
    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    const breadcrumbSection1Link = breadcrumbComponent.children[0];
    const breadcrumbSection1_2Link = breadcrumbComponent.children[2];

    expect(breadcrumbSection1Link.getAttribute("data-testid")).equals(
      "breadcrumb-link"
    );
    expect(breadcrumbSection1Link.getAttribute("style")).contains("color: red");
    expect(breadcrumbSection1_2Link.getAttribute("data-testid")).equals(
      "breadcrumb-link"
    );
    expect(breadcrumbSection1_2Link.getAttribute("style")).contains(
      "color: blue"
    );

    breadcrumb.unmount();
  });

  test("should not navigate when click on BreadcrumbLink without href", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink>Section1</BreadcrumbLink>
        <BreadcrumbLink href="/section/1/1_2">Section1</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );

    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    const section1 = breadcrumbComponent.children[0];
    expect(navigateMock.mock.calls).toHaveLength(0);
    fireEvent.click(section1);
    expect(navigateMock.mock.calls).toHaveLength(0);

    breadcrumb.unmount();
  });

  test("should navigate when click on BreadcrumbLink with href", async () => {
    const breadcrumb = render(
      <Breadcrumb>
        <BreadcrumbLink href="/section/1">Section1</BreadcrumbLink>
        <BreadcrumbLink href="/section/1/1_2">Section1</BreadcrumbLink>
      </Breadcrumb>,
      { wrapper: BrowserRouter }
    );

    const breadcrumbComponent = await breadcrumb.findByTestId("breadcrumb");
    const section1 = breadcrumbComponent.children[0];
    const section1_2 = breadcrumbComponent.children[2];
    expect(navigateMock.mock.calls).toHaveLength(0);
    fireEvent.click(section1);
    expect(navigateMock.mock.calls).toHaveLength(1);
    expect(navigateMock).toHaveBeenCalledWith("/section/1");
    fireEvent.click(section1_2);
    expect(navigateMock.mock.calls).toHaveLength(2);
    expect(navigateMock).toHaveBeenCalledWith("/section/1/1_2");

    breadcrumb.unmount();
  });
});
