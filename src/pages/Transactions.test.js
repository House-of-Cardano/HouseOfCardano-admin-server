import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Transactions from "./Transactions";

describe("Transactions component", () => {
  test("renders query script address", () => {
    // Arange
    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("query script address", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
  test("renders calculate transaction paramtres", () => {
    // Arange
    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("calculate transaction paramtres", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
  test("renders transfer transactions", () => {
    // Arange
    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("transfer transactions", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
  test("renders query addresses", () => {
    // Arange
    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("query addresses", { exact: true });
    expect(queryElement).toBeInTheDocument();
  });
  test("renders transfer to winning addresses", () => {
    // Arange
    render(
      <BrowserRouter>
        <Transactions />
      </BrowserRouter>
    );

    // Act
    // ... nothing

    // Assert
    const queryElement = screen.getByText("transfer to winning addresses", {
      exact: true,
    });
    expect(queryElement).toBeInTheDocument();
  });
});
