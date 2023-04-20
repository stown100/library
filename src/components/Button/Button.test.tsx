import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

describe("Button", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world!" />);
    const buttonElement = screen.getByRole("button", { name: "Hello world!" });
    expect(buttonElement).toBeTruthy();
  });

  test("renders the Button component as a link", () => {
    render(<Button label="Hello world!" />);
    const linkElement = screen.getByRole("link", { name: "Hello world!" });
    expect(linkElement).toBeTruthy();
    expect(linkElement).toHaveAttribute("href", "https://example.com");
  });

  test("button click event works", () => {
    const onClick = jest.fn();
    render(<Button label="Hello world!" />);
    const buttonElement = screen.getByRole("button", { name: "Click me" });
    userEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalled();
  });
});
