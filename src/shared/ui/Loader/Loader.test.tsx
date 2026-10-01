import Loader from "./Loader";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {
  test("The loader is displayed and has the correct test-id", () => {
    render(<Loader />);
    const loader = screen.getByTestId("loader");
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass("flex items-center justify-center");
  });
});
