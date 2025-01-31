import { fireEvent, render, screen } from "@testing-library/react";

import { Input } from "@/components/ui/input";

describe("Input Component", () => {
  it("renders without crashing", () => {
    render(<Input placeholder="Enter text" />);
    expect(screen.getByPlaceholderText("Enter text")).toBeInTheDocument();
  });

  it("accepts and displays user input", () => {
    render(<Input placeholder="Enter text" />);
    const input = screen.getByPlaceholderText("Enter text");

    fireEvent.change(input, { target: { value: "Hello World" } });

    expect(input).toHaveValue("Hello World");
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Input className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("disables input when disabled prop is set", () => {
    render(<Input disabled placeholder="Disabled input" />);
    const input = screen.getByPlaceholderText("Disabled input");

    expect(input).toBeDisabled();
  });

  it("renders with a specific type", () => {
    render(<Input type="password" />);
    const input = screen.getByRole("textbox");

    expect(input).toHaveAttribute("type", "password");
  });
});
