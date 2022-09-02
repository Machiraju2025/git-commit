import { render, screen } from "@testing-library/react";
import Header from "./header";

describe("Header", () => {
  test("should render", () => {
    const url = "https//github.com";
    render(<Header url={url} />);
    expect(
      screen.getByRole("heading", { name: /git commit history/i })
    ).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
  });
});