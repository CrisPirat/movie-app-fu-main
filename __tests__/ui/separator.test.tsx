import { render, screen } from "@testing-library/react";

import { Separator } from "@/components/ui/separator";

describe("Separator Component", () => {
  it("renders without crashing", () => {
    render(<Separator />);
    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("renders as a horizontal separator by default", () => {
    render(<Separator />);
    const separator = screen.getByRole("separator");

    expect(separator).toHaveClass("h-[1px] w-full");
  });

  it("renders as a vertical separator when specified", () => {
    render(<Separator orientation="vertical" />);
    const separator = screen.getByRole("separator");

    expect(separator).toHaveClass("h-full w-[1px]");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Separator className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("is decorative by default", () => {
    render(<Separator />);
    const separator = screen.getByRole("separator");

    expect(separator).toHaveAttribute("data-orientation", "horizontal");
  });
});
