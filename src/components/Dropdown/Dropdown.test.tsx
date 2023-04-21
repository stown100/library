import React from "react";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown component", () => {
  test("renders the Tooltip component", () => {
    render(<Dropdown label="Dropdown" children={<button>Dropdown</button>} />);
  });
  test("renders the Dropdown component with label", () => {
    render(<Dropdown label="Dropdown" children={<button>Dropdown</button>} />);
    const buttonElement = screen.getByRole("button", { name: "Dropdown" });
    expect(buttonElement.textContent).toBe("Dropdown");
  });
});

// it("renders without crashing", () => {
//   const { getByText } = render(<Dropdown label="Dropdown" />);
//   expect(getByText("Test Label")).toBeInTheDocument();
// });

// it("displays content on click", () => {
//   const { getByText, queryByText } = render(
//     <Dropdown label="Dropdown" />
//   );
//   expect(queryByText("Test Content")).toBeNull();
//   const button = getByText("Test Label");
//   fireEvent.click(button);
//   expect(getByText("Test Content")).toBeInTheDocument();
// });

// it("hides content on click outside", () => {
//   const { getByText, getByTestId, queryByTestId } = render(
//     <Dropdown label="Dropdown" />
//   );
//   const button = getByText("Test Label");
//   fireEvent.click(button);
//   const window = getByTestId("dropdownWindow");
//   expect(window).toBeInTheDocument();
//   fireEvent.click(document.body);
//   expect(queryByTestId("dropdownWindow")).toBeNull();
// });

// it("applies size prop correctly", () => {
//   const { getByText } = render(<Dropdown label="Dropdown" />);
//   expect(getByText("Test Label")).toHaveClass("large");
// });
// test("renders the Dropdown component", () => {
//   render(<Dropdown label="Dropdown" />);
// });

// test("renders the Dropdown component with size prop", () => {
//   render(<Dropdown label="Dropdown" />);
// });

// test("renders the Dropdown component with content prop", () => {
//   render(<Dropdown label="Dropdown" />);
// });

// test("displays the dropdown on click", () => {
//   const { getByText, getByTestId } = render(
//     <Dropdown label="Dropdown" />
//   );
//   const button = getByText("Dropdown");
//   fireEvent.click(button);
//   const dropdown = getByTestId("dropdownWindow");
//   expect(dropdown).toBeInTheDocument();
// });

// test("hides the dropdown on click outside", () => {
//   const { getByText, getByTestId, queryByTestId } = render(
//     <Dropdown label="Dropdown" />
//   );
//   const button = getByText("Dropdown");
//   fireEvent.click(button);
//   const dropdown = getByTestId("dropdownWindow");
//   expect(dropdown).toBeInTheDocument();
//   fireEvent.click(document.body);
//   expect(queryByTestId("dropdownWindow")).not.toBeInTheDocument();
// });

// test("hides the dropdown on escape key", () => {
//   const { getByText, getByTestId, queryByTestId } = render(
//     <Dropdown label="Dropdown" />
//   );
//   const button = getByText("Dropdown");
//   fireEvent.click(button);
//   const dropdown = getByTestId("dropdownWindow");
//   expect(dropdown).toBeInTheDocument();
//   fireEvent.click(document.body);
//   expect(queryByTestId("dropdownWindow")).not.toBeInTheDocument();
// });
// });
