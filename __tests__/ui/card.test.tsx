import { render, screen } from "@testing-library/react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

describe("Card Component", () => {
  it("renders without crashing", () => {
    render(<Card>Test Card</Card>);
    expect(screen.getByText("Test Card")).toBeInTheDocument();
  });

  it("renders the CardHeader correctly", () => {
    render(<CardHeader>Header Content</CardHeader>);
    expect(screen.getByText("Header Content")).toBeInTheDocument();
  });

  it("renders the CardTitle correctly", () => {
    render(<CardTitle>Card Title</CardTitle>);
    expect(screen.getByText("Card Title")).toBeInTheDocument();
  });

  it("renders the CardDescription correctly", () => {
    render(<CardDescription>Card Description</CardDescription>);
    expect(screen.getByText("Card Description")).toBeInTheDocument();
  });

  it("renders the CardContent correctly", () => {
    render(<CardContent>Content Section</CardContent>);
    expect(screen.getByText("Content Section")).toBeInTheDocument();
  });

  it("renders the CardFooter correctly", () => {
    render(<CardFooter>Footer Content</CardFooter>);
    expect(screen.getByText("Footer Content")).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(<Card className="custom-class">Custom Card</Card>);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
