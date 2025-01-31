import { fireEvent, render, screen } from "@testing-library/react";

import { Button } from "@/components/ui/button";

describe("Button Component", () => {
  it("renders without crashing", () => {
    render(<Button>Click Me</Button>);
    expect(screen.getByText("Click Me")).toBeInTheDocument();
  });

  it("triggers onClick event when clicked", () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);

    fireEvent.click(screen.getByText("Click Me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies the default variant class", () => {
    const { container } = render(<Button>Default Button</Button>);
    expect(container.firstChild).toHaveClass("bg-primary text-primary-foreground");
  });

  it("applies the destructive variant class", () => {
    const { container } = render(<Button variant="destructive">Destructive Button</Button>);
    expect(container.firstChild).toHaveClass("bg-destructive text-destructive-foreground");
  });

  it("applies the outline variant class", () => {
    const { container } = render(<Button variant="outline">Outline Button</Button>);
    expect(container.firstChild).toHaveClass("border border-input bg-background");
  });

  it("applies the correct size class", () => {
    const { container } = render(<Button size="lg">Large Button</Button>);
    expect(container.firstChild).toHaveClass("h-10 rounded-md px-8");
  });

  it("renders as a link when using asChild", () => {
    render(
      <Button asChild>
        <a href="/test">Link Button</a>
      </Button>
    );
    expect(screen.getByText("Link Button").closest("a")).toHaveAttribute("href", "/test");
  });

  it("disables the button when the disabled prop is set", () => {
    render(<Button disabled>Disabled Button</Button>);
    expect(screen.getByText("Disabled Button")).toBeDisabled();
  });
});
