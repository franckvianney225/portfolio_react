import { render, screen } from "@testing-library/react";
import { Portfolio } from "./index";
import { dataportfolio } from "../../content_option";

test("renders every project with a non-empty image description", () => {
  render(<Portfolio />);

  const links = screen.getAllByText(/view project/i);
  expect(links).toHaveLength(dataportfolio.length);

  const images = screen.getAllByRole("img");
  images.forEach((img) => {
    expect(img.getAttribute("alt")).not.toBe("");
  });
});
