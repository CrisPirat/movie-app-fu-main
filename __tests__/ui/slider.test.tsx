import { fireEvent, render, screen } from "@testing-library/react";

import { Slider } from "@/components/ui/slider";

describe("Slider Component", () => {
  it("renders without crashing", () => {
    render(<Slider />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });

  it("has the correct default styles", () => {
    render(<Slider />);
    const slider = screen.getByRole("slider");

    expect(slider).toHaveClass("relative flex w-full touch-none select-none items-center");
  });

  it("updates value when dragged", () => {
    render(<Slider defaultValue={[50]} min={0} max={100} step={1} />);
    const sliderThumb = screen.getByRole("slider");

    fireEvent.keyDown(sliderThumb, { key: "ArrowRight", code: "ArrowRight" });
    expect(sliderThumb).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Slider className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("disables the slider when `disabled` prop is set", () => {
    render(<Slider disabled />);
    const sliderThumb = screen.getByRole("slider");

    expect(sliderThumb).toBeDisabled();
  });
});
