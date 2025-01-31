import { fireEvent, render, screen } from "@testing-library/react";

import { Checkbox } from "@/components/ui/checkbox";

describe("Checkbox Component", () => {
  it("renders without crashing", () => {
    render(<Checkbox data-testid="checkbox" />);
    expect(screen.getByTestId("checkbox")).toBeInTheDocument();
  });

  it("toggles checked state when clicked", () => {
    render(<Checkbox data-testid="checkbox" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("does not toggle when disabled", () => {
    render(<Checkbox disabled data-testid="checkbox" />);
    const checkbox = screen.getByTestId("checkbox");

    expect(checkbox).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).not.toBeChecked();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Checkbox className="custom-class" data-testid="checkbox" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
