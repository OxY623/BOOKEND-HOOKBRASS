import { fireEvent, render } from "test-utils";
import { BoundaryButton } from "./BoundaryButton";

describe("BoundaryButton", () => {
  it("should render correctly", () => {
    const { container } = render(<BoundaryButton onClick={()=>{}} />);
    expect(container).toMatchSnapshot();
  });

  it("should handle click events", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(<BoundaryButton onClick={handleClick} />);
    const button = getByRole("button");
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
