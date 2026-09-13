import { render, screen } from "@testing-library/react";
import { Portfolio } from "./index";
import { dataportfolio } from "../../content_option";

test("renders every project with a non-empty image description", () => {
  render(<Portfolio />);

  const withLink = dataportfolio.filter((p) => p.link).length;
  const withoutLink = dataportfolio.length - withLink;

  expect(screen.getAllByText(/view project/i)).toHaveLength(withLink);
  expect(screen.getAllByText("Projet privé")).toHaveLength(withoutLink);

  const images = screen.getAllByRole("img");
  expect(images).toHaveLength(dataportfolio.filter((p) => p.img).length);
  images.forEach((img) => {
    expect(img.getAttribute("alt")).not.toBe("");
  });
});
