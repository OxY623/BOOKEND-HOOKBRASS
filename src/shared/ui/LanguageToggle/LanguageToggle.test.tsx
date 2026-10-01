import {
  cleanup,
  fireEvent,
  render,
} from "../../../../test/__utils__/test-utils";
import { LanguageToggle } from "./LanguageToggle";
afterEach(cleanup);

describe("LanguageToggleButton", () => {
  test("should render correctly", () => {
    const { container } = render(<LanguageToggle />);
    expect(container).toMatchSnapshot();
  });

  test("should be an icon", () => {
    const { getByTestId } = render(<LanguageToggle />);
    expect(getByTestId("icon")).toBeInTheDocument();
  });

  test("should be to switch a language", () => {
    const { getByTestId } = render(<LanguageToggle />);
    const btn = getByTestId("toggle-button");
    const lang = getByTestId("lang");
    expect(lang).toHaveTextContent("EN");
    fireEvent.click(btn);
    expect(lang).toHaveTextContent("ES");
    fireEvent.click(btn);
    expect(lang).toHaveTextContent("EN");
  });
});
