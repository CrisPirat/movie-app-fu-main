import { fireEvent, render, screen } from "@testing-library/react";

import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from "@/components/ui/resizable";

describe("Resizable Component", () => {
  it("renders without crashing", () => {
    render(
      <ResizablePanelGroup>
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByText("Panel 1")).toBeInTheDocument();
    expect(screen.getByText("Panel 2")).toBeInTheDocument();
  });

  it("renders the resize handle when `withHandle` is true", () => {
    render(
      <ResizablePanelGroup>
        <ResizablePanel>Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel>Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("allows resizing panels", () => {
    render(
      <ResizablePanelGroup>
        <ResizablePanel data-testid="panel-1">Panel 1</ResizablePanel>
        <ResizableHandle withHandle />
        <ResizablePanel data-testid="panel-2">Panel 2</ResizablePanel>
      </ResizablePanelGroup>
    );

    const handle = screen.getByRole("separator");
    fireEvent.mouseDown(handle);
    fireEvent.mouseMove(handle, { clientX: 200 });
    fireEvent.mouseUp(handle);

    expect(screen.getByTestId("panel-1")).toBeInTheDocument();
    expect(screen.getByTestId("panel-2")).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <ResizablePanelGroup className="custom-class">
        <ResizablePanel>Panel</ResizablePanel>
      </ResizablePanelGroup>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
