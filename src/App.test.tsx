import React from "react";
import App from "./App";
describe("render text in app", () => {
  it("render heading", () => {
    render(<App />);
    const h1El = screen.getByRole("heading");
    expect(h1El).toBeInTheDocument();
  });
});
