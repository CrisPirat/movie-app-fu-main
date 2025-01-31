import { render, screen } from "@testing-library/react";

import { Badge } from "@/components/ui/badge";

describe("Badge Component", () => {
  it("renders without crashing", () => {
    render(<Badge>Test Badge</Badge>);
    expect(screen.getByText("Test Badge")).toBeInTheDocument();
  });

  it("applies the default variant class", () => {
    const { container } = render(<Badge>Default Badge</Badge>);
    expect(container.firstChild).toHaveClass("bg-primary text-primary-foreground");
  });

  it("applies the secondary variant class", () => {
    const { container } = render(<Badge variant="secondary">Secondary Badge</Badge>);
    expect(container.firstChild).toHaveClass("bg-secondary text-secondary-foreground");
  });

  it("applies the destructive variant class", () => {
    const { container } = render(<Badge variant="destructive">Destructive Badge</Badge>);
    expect(container.firstChild).toHaveClass("bg-destructive text-destructive-foreground");
  });

  it("applies the outline variant class", () => {
    const { container } = render(<Badge variant="outline">Outline Badge</Badge>);
    expect(container.firstChild).toHaveClass("text-foreground");
  });

  it("accepts custom classes", () => {
    const { container } = render(<Badge className="custom-class">Custom Badge</Badge>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
