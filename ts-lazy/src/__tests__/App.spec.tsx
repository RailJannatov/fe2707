import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";

test("should show false value", () => {
  render(<App />);

  const falseElement = screen.getByText("False");

  expect(falseElement).toBeInTheDocument();
});

test("should show initial counter value as 0", () => {
  render(<App />);
  const button = screen.getByRole("button", { name: /click me/i });

  fireEvent.click(button);

  const counterElement = screen.getByText("0");

  expect(counterElement).toBeInTheDocument();
});
