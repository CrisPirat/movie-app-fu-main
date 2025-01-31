import { fireEvent, render, screen } from "@testing-library/react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

describe("ToggleGroup Component", () => {
  it("renders without crashing", () => {
    render(
      <ToggleGroup>
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(screen.getByText("Option 1")).toBeInTheDocument();
    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("allows selecting an option", () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const option1 = screen.getByText("Option 1");
    fireEvent.click(option1);

    expect(option1).toHaveAttribute("data-state", "on");
  });

  it("only allows one selection in single mode", () => {
    render(
      <ToggleGroup type="single">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");

    fireEvent.click(option1);
    expect(option1).toHaveAttribute("data-state", "on");

    fireEvent.click(option2);
    expect(option2).toHaveAttribute("data-state", "on");
    expect(option1).toHaveAttribute("data-state", "off");
  });

  it("allows multiple selections in multiple mode", () => {
    render(
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
        <ToggleGroupItem value="option2">Option 2</ToggleGroupItem>
      </ToggleGroup>
    );

    const option1 = screen.getByText("Option 1");
    const option2 = screen.getByText("Option 2");

    fireEvent.click(option1);
    fireEvent.click(option2);

    expect(option1).toHaveAttribute("data-state", "on");
    expect(option2).toHaveAttribute("data-state", "on");
  });

  it("applies custom styles correctly", () => {
    const { container } = render(
      <ToggleGroup className="custom-class">
        <ToggleGroupItem value="option1">Option 1</ToggleGroupItem>
      </ToggleGroup>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
