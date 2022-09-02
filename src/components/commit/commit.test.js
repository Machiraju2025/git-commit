import { render, screen } from "@testing-library/react";
import Commit from "./commit";

describe("Commit", () => {
  test("it render", () => {
    const message = "initial commit";
    const author = "me";
    const date = new Date().toISOString();
    const url = "http://gighub.com";

    render(<Commit author={author} date={date} message={message} url={url} />);
    expect(screen.getByRole("heading", { name: message })).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveAttribute("href", url);
    expect(screen.getByTestId("author")).toHaveTextContent(author);
  });
});