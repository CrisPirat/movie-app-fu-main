import { fireEvent, render, screen } from "@testing-library/react";

import { Switch } from "@/components/ui/switch";

describe("Switch Component", () => {
  it("renders without crashing", () => {
    render(<Switch />);
    expect(screen.getByRole("switch")).toBeInTheDocument();
  });

  it("toggles state when clicked", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toHaveAttribute("data-state", "unchecked");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("data-state", "checked");

    fireEvent.click(switchElement);
    expect(switchElement).toHaveAttribute("data-state", "unchecked");
  });

  it("disables switch when `disabled` prop is set", () => {
    render(<Switch disabled />);
    const switchElement = screen.getByRole("switch");

    expect(switchElement).toBeDisabled();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Switch className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
