import { cleanup, render } from "test-utils";
import { BackgroundImage } from "./BackgroundImage";

afterEach(cleanup);

describe("BackgroundImage", () => {
  test("should render correctly", () => {
    const { container } = render(<BackgroundImage src="#" isVisible={true} />);
    expect(container).toMatchSnapshot();
  });

  test("should be visible", () => {
    const { getByTestId } = render(
      <BackgroundImage isVisible={true} src={"#"} />,
    );
    expect(getByTestId("bg-image")).toHaveClass("opacity-100 scale-100");
  });

  test("should be hidden", () => {
    const { getByTestId } = render(
      <BackgroundImage isVisible={false} src={"#"} />,
    );
    expect(getByTestId("bg-image")).not.toHaveClass("opacity-100 scale-100");
  });

  test("should be an image", () => {
    const { getByTestId } = render(
      <BackgroundImage src={"./image.jpg"} isVisible={true} />,
    );
    expect(getByTestId("bg-image")).toHaveStyle(
      'backgroundImage: url("./image.jpg")',
    );
  });
});
