import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";
import Index from "./src/index";
import { PlayerList } from "./src/pages/Main/components/PlayerList";
import { TeamsList } from "./src/pages/Main/components/TeamsList";

describe("Index", () => {
  it("renders without crashing", () => {
    render(<Index />);
  });

  it("renders a title", () => {
    render(<PlayerList />);
    expect(screen.getByRole("heading")).toHaveTextContent("Jugadores");
  });
});

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
