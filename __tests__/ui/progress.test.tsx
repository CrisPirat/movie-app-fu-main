import { render, screen } from "@testing-library/react";

import { Progress } from "@/components/ui/progress";

describe("Progress Component", () => {
  it("renders without crashing", () => {
    render(<Progress value={50} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("applies correct width based on value", () => {
    render(<Progress value={75} />);
    const progressIndicator = screen.getByRole("progressbar").firstChild;

    expect(progressIndicator).toHaveStyle("transform: translateX(-25%)");
  });

  it("renders with 0% progress when no value is provided", () => {
    render(<Progress />);
    const progressIndicator = screen.getByRole("progressbar").firstChild;

    expect(progressIndicator).toHaveStyle("transform: translateX(-100%)");
  });

  it("renders with custom styles when className is provided", () => {
    const { container } = render(<Progress className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
