import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
  });
  test("renders the Button component with label", () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement.textContent).toBe("Button");
  });
});
