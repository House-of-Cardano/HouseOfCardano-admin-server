import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import QueryScriptAddr from "../../pages/QueryScriptAddr";

describe("QueryBlockchainInput component", () => {
  it("renders user input for an address to query", () => {
    // Arange
    render(
      <BrowserRouter>
        <QueryScriptAddr />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("Script address", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });

  it("renders user input for a datum hash to query", () => {
    // Arange
    render(
      <BrowserRouter>
        <QueryScriptAddr />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("Datum hash", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
});
