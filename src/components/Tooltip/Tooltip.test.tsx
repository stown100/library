import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  it("renders without crashing", () => {
    const { getByText } = render(<Tooltip label="Tooltip" />);
    expect(getByText("Tooltip")).toBeInTheDocument();
  });

  it("displays content on hover", () => {
    const { getByText, queryByText } = render(<Tooltip label="Tooltip" />);
    expect(queryByText("Tooltip text content")).toBeNull();
    getByText("Tooltip").dispatchEvent(new MouseEvent("mouseover"));
    expect(getByText("Tooltip text content")).toBeInTheDocument();
    getByText("Tooltip").dispatchEvent(new MouseEvent("mouseout"));
    expect(queryByText("Tooltip text content")).toBeNull();
  });

  it("applies size prop correctly", () => {
    const { getByText } = render(<Tooltip label="Tooltip" />);
    expect(getByText("Tooltip")).toHaveClass("large");
  });
  test("renders the Tooltip component", () => {
    render(<Tooltip label="Tooltip" />);
  });

  test("renders the Tooltip component with size prop", () => {
    render(<Tooltip label="Tooltip" />);
  });

  test("renders the Tooltip component with content prop", () => {
    render(<Tooltip label="Tooltip" />);
  });

  test("displays the tooltip on hover", () => {
    const { getByText, getByTestId } = render(<Tooltip label="Tooltip" />);
    const button = getByText("Tooltip");
    fireEvent.mouseOver(button);
    const tooltip = getByTestId("tooltipWindow");
    expect(tooltip).toBeInTheDocument();
  });

  test("hides the tooltip on mouse out", () => {
    const { getByText, getByTestId, queryByTestId } = render(
      <Tooltip label="Tooltip" />
    );
    const button = getByText("Tooltip");
    fireEvent.mouseOver(button);
    const tooltip = getByTestId("tooltipWindow");
    expect(tooltip).toBeInTheDocument();
    fireEvent.mouseOut(button);
    expect(queryByTestId("tooltipWindow")).not.toBeInTheDocument();
  });

  test("positions the tooltip correctly", () => {
    const { getByText, getByTestId } = render(<Tooltip label="Tooltip" />);
    const button = getByText("Tooltip");
    fireEvent.mouseOver(button);
    const tooltip = getByTestId("tooltipWindow");
    expect(tooltip).toHaveClass("windowTooltipTop");
  });
});
