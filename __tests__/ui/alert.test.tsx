import { render, screen } from "@testing-library/react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

describe("Alert Component", () => {
  it("renders without crashing", () => {
    render(
      <Alert>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a test alert</AlertDescription>
      </Alert>
    );

    expect(screen.getByRole("alert")).toBeInTheDocument();
  });

  it("renders the correct title and description", () => {
    render(
      <Alert>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>This is a test alert</AlertDescription>
      </Alert>
    );

    expect(screen.getByText("Warning")).toBeInTheDocument();
    expect(screen.getByText("This is a test alert")).toBeInTheDocument();
  });

  it("applies the default variant class", () => {
    const { container } = render(<Alert>Test Alert</Alert>);
    expect(container.firstChild).toHaveClass("bg-background text-foreground");
  });

  it("applies the destructive variant class", () => {
    const { container } = render(<Alert variant="destructive">Test Alert</Alert>);
    expect(container.firstChild).toHaveClass("border-destructive/50 text-destructive");
  });
});
