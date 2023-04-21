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
