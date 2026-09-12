import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "./index";

test("renders the hero with both call-to-action links", () => {
  render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(screen.getByText("Mon Portfolio")).toBeInTheDocument();
  expect(screen.getByText("Contactez-moi")).toBeInTheDocument();
});
