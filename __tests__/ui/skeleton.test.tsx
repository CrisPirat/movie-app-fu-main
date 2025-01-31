import { render, screen } from "@testing-library/react";

import { Skeleton } from "@/components/ui/skeleton";

describe("Skeleton Component", () => {
  it("renders without crashing", () => {
    render(<Skeleton />);
    expect(screen.getByRole("presentation")).toBeInTheDocument();
  });

  it("has the default skeleton styles", () => {
    render(<Skeleton />);
    const skeleton = screen.getByRole("presentation");

    expect(skeleton).toHaveClass("animate-pulse rounded-md bg-primary/10");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Skeleton className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("supports additional props", () => {
    render(<Skeleton data-testid="skeleton" />);
    expect(screen.getByTestId("skeleton")).toBeInTheDocument();
  });
});
