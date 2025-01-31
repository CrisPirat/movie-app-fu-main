import { render, screen } from "@testing-library/react";

import { Spinner } from "@/components/ui/spinner";

describe("Spinner Component", () => {
  it("renders without crashing", () => {
    render(<Spinner />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("has the correct default size (medium)", () => {
    render(<Spinner />);
    const spinner = screen.getByRole("status");

    expect(spinner.firstChild).toHaveClass("size-8");
  });

  it("applies custom size correctly", () => {
    render(<Spinner size="large" />);
    const spinner = screen.getByRole("status");

    expect(spinner.firstChild).toHaveClass("size-12");
  });

  it("hides the spinner when `show` is set to false", () => {
    render(<Spinner show={false} />);
    const spinner = screen.getByRole("status");

    expect(spinner).toHaveClass("hidden");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Spinner className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
