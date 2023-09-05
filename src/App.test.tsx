import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders greeting", () => {
  render(<App />);
  const soughtElement = screen.getByText(/mobx-todo/i);
  expect(soughtElement).toBeInTheDocument();
});
