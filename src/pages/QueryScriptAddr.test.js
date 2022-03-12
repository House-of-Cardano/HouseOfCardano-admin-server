import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import QueryScriptAddr from "./QueryScriptAddr";

describe("QueryScriptAddr component", () => {
  test("renders Query Script Address", () => {
    // Arange
    render(
      <BrowserRouter>
        <QueryScriptAddr />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("Query Script Address", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
});
