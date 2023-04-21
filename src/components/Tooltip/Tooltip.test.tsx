import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

describe("Tooltip component", () => {
  test("renders the Tooltip component", () => {
    render(
      <Tooltip
        element={<button>Tooltip</button>}
        children={<span>Tooltip text content</span>}
      />
    );
  });
  test("renders the Tooltip component with label", () => {
    render(
      <Tooltip
        element={<button>Tooltip</button>}
        children={<span>Tooltip text content</span>}
      />
    );
    const buttonElement = screen.getByRole("button", { name: "Tooltip" });
    expect(buttonElement.textContent).toBe("Tooltip");
  });
});
