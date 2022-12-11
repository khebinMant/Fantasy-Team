import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Index from "./index";
import App from "./App";

describe("App", () => {
  it("renders a Progressbar", () => {
    render(<App />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders a textbox", () => {
    render(<App />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });
  it("renders a heading", () => {
    render(<App />);
    expect(screen.getByLabelText("Registrate"));
  });

  it("Click on Register", () => {
    render(<App />);
    const link = screen.getByRole("button", { name: "Registrate" });
    fireEvent.click(link);
    expect(screen.getAllByAltText("waves"));
  });

  it("Click on Iniciar sesion", () => {
    render(<App />);
    const link = screen.getByRole("heading", { name: "Crear cuenta" });
    fireEvent.click(link);
    expect(screen.getAllByText("Crear cuenta"));
  });
});
