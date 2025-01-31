import { render, screen } from "@testing-library/react";

import { Toaster } from "@/components/ui/sonner";

describe("Toaster Component", () => {
  it("renders without crashing", () => {
    render(<Toaster />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("applies the correct theme based on context", () => {
    render(<Toaster />);
    const toaster = screen.getByRole("status");

    expect(toaster).toHaveClass("toaster group");
  });

  it("renders with default toast styles", () => {
    render(<Toaster />);
    const toaster = screen.getByRole("status");

    expect(toaster).toHaveClass("group-[.toaster]:bg-background group-[.toaster]:text-foreground");
  });

  it("supports custom props", () => {
    const { container } = render(<Toaster className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
