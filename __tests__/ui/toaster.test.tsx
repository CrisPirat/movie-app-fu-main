import { render, screen } from "@testing-library/react";

import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";

jest.mock("@/hooks/use-toast", () => ({
  useToast: jest.fn(),
}));

describe("Toaster Component", () => {
  it("renders without crashing", () => {
    useToast.mockReturnValue({ toasts: [] });

    render(<Toaster />);
    expect(screen.getByRole("status")).toBeInTheDocument();
  });

  it("renders a toast when one exists", () => {
    useToast.mockReturnValue({
      toasts: [{ id: "1", title: "Test Toast", description: "Toast description" }],
    });

    render(<Toaster />);

    expect(screen.getByText("Test Toast")).toBeInTheDocument();
    expect(screen.getByText("Toast description")).toBeInTheDocument();
  });

  it("renders multiple toasts when provided", () => {
    useToast.mockReturnValue({
      toasts: [
        { id: "1", title: "Toast 1", description: "Description 1" },
        { id: "2", title: "Toast 2", description: "Description 2" },
      ],
    });

    render(<Toaster />);

    expect(screen.getByText("Toast 1")).toBeInTheDocument();
    expect(screen.getByText("Description 1")).toBeInTheDocument();
    expect(screen.getByText("Toast 2")).toBeInTheDocument();
    expect(screen.getByText("Description 2")).toBeInTheDocument();
  });

  it("renders the toast close button", () => {
    useToast.mockReturnValue({
      toasts: [{ id: "1", title: "Test Toast", description: "Toast description" }],
    });

    render(<Toaster />);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("applies custom styles correctly", () => {
    useToast.mockReturnValue({ toasts: [] });

    const { container } = render(<Toaster className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
