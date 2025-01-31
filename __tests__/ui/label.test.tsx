import { render, screen } from "@testing-library/react";

import { Label } from "@/components/ui/label";

describe("Label Component", () => {
  it("renders without crashing", () => {
    render(<Label htmlFor="test-input">Test Label</Label>);
    expect(screen.getByText("Test Label")).toBeInTheDocument();
  });

  it("associates correctly with an input field", () => {
    render(
      <>
        <Label htmlFor="test-input">Test Label</Label>
        <input id="test-input" />
      </>
    );

    const label = screen.getByText("Test Label");
    expect(label).toHaveAttribute("for", "test-input");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Label className="custom-class">Styled Label</Label>);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders disabled state styles when used with a disabled input", () => {
    render(
      <>
        <Label htmlFor="test-input">Disabled Label</Label>
        <input disabled id="test-input" className="peer" />
      </>
    );

    const label = screen.getByText("Disabled Label");
    expect(label).toHaveClass("peer-disabled:cursor-not-allowed");
  });
});
