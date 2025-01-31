import { fireEvent, render, screen } from "@testing-library/react";

import { Toggle } from "@/components/ui/toggle";

describe("Toggle Component", () => {
  it("renders without crashing", () => {
    render(<Toggle />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("toggles state when clicked", () => {
    render(<Toggle data-testid="toggle-button" />);
    const toggleButton = screen.getByTestId("toggle-button");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("data-state", "on");

    fireEvent.click(toggleButton);
    expect(toggleButton).toHaveAttribute("data-state", "off");
  });

  it("disables toggle when `disabled` prop is set", () => {
    render(<Toggle disabled />);
    const toggleButton = screen.getByRole("button");

    expect(toggleButton).toBeDisabled();
  });

  it("applies custom variant styles", () => {
    render(<Toggle variant="outline" data-testid="toggle-outline" />);
    const toggleButton = screen.getByTestId("toggle-outline");

    expect(toggleButton).toHaveClass("border border-input bg-transparent shadow-sm");
  });

  it("applies custom size styles", () => {
    render(<Toggle size="lg" data-testid="toggle-lg" />);
    const toggleButton = screen.getByTestId("toggle-lg");

    expect(toggleButton).toHaveClass("h-10 px-3");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Toggle className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
