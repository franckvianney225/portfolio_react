import { render, screen } from "@testing-library/react";
import App from "./app/App";
import { logotext } from "./content_option";

test("renders the app shell without crashing", () => {
  render(<App />);
  expect(screen.getAllByText(logotext)[0]).toBeInTheDocument();
});
