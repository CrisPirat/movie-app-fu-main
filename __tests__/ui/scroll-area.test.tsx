import { render, screen } from "@testing-library/react";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

describe("ScrollArea Component", () => {
  it("renders without crashing", () => {
    render(
      <ScrollArea>
        <div>Scrollable Content</div>
      </ScrollArea>
    );

    expect(screen.getByText("Scrollable Content")).toBeInTheDocument();
  });

  it("renders a vertical scrollbar", () => {
    render(<ScrollBar orientation="vertical" />);
    const scrollbar = screen.getByRole("scrollbar");

    expect(scrollbar).toHaveAttribute("orientation", "vertical");
  });

  it("renders a horizontal scrollbar", () => {
    render(<ScrollBar orientation="horizontal" />);
    const scrollbar = screen.getByRole("scrollbar");

    expect(scrollbar).toHaveAttribute("orientation", "horizontal");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<ScrollArea className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
