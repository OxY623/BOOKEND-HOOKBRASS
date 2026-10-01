import { cleanup, render } from "../test/__utils__/test-utils";
import App from "./App";

afterEach(cleanup);

describe("App", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("should take a snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
