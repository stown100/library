import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

  test("renders the Button component with size", () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement.className).toBe("btn large");
  });

  test("renders the Button component with type", () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement.className).toBe("btn primary");
  });

  test("renders the Button component as disabled", () => {
    render(<Button label="Button" />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    expect(buttonElement.ariaDisabled).toBe("disabled");
  });

  test("renders the Button component as a link", () => {
    render(<Button label="Button" />);
    const linkElement = screen.getByRole("link", { name: "Button" });
    expect(linkElement).toHaveClass("btn link");
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  test("button click event works", () => {
    const onClick = jest.fn();
    render(<Button label="Button" />);
    const buttonElement = screen.getByRole("button", { name: "Button" });
    userEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
