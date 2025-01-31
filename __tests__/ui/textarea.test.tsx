import { fireEvent, render, screen } from "@testing-library/react";

import { Textarea } from "@/components/ui/textarea";

describe("Textarea Component", () => {
  it("renders without crashing", () => {
    render(<Textarea />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("accepts user input", () => {
    render(<Textarea />);
    const textarea = screen.getByRole("textbox");

    fireEvent.change(textarea, { target: { value: "Test input" } });
    expect(textarea).toHaveValue("Test input");
  });

  it("applies custom styles correctly", () => {
    const { container } = render(<Textarea className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("is disabled when the `disabled` prop is set", () => {
    render(<Textarea disabled />);
    const textarea = screen.getByRole("textbox");

    expect(textarea).toBeDisabled();
  });

  it("displays a placeholder when provided", () => {
    render(<Textarea placeholder="Enter text..." />);
    expect(screen.getByPlaceholderText("Enter text...")).toBeInTheDocument();
  });
});
