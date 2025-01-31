import { fireEvent, render, screen } from "@testing-library/react";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

describe("RadioGroup Component", () => {
  it("renders without crashing", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    );

    expect(screen.getByRole("radio", { name: /option1/i })).toBeInTheDocument();
    expect(screen.getByRole("radio", { name: /option2/i })).toBeInTheDocument();
  });

  it("allows selecting an option", () => {
    render(
      <RadioGroup>
        <RadioGroupItem value="option1" />
        <RadioGroupItem value="option2" />
      </RadioGroup>
    );

    const option1 = screen.getByRole("radio", { name: /option1/i });
    fireEvent.click(option1);

    expect(option1).toBeChecked();
  });

  it("disables selection when disabled prop is set", () => {
    render(
      <RadioGroup>
        <RadioGroupItem disabled value="option1" />
      </RadioGroup>
    );

    const option1 = screen.getByRole("radio", { name: /option1/i });
    expect(option1).toBeDisabled();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <RadioGroup className="custom-class">
        <RadioGroupItem value="option1" />
      </RadioGroup>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
