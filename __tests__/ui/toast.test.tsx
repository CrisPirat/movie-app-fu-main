import { fireEvent, render, screen } from "@testing-library/react";

import {
  Toast,
  ToastAction,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast";

describe("Toast Component", () => {
  it("renders without crashing", () => {
    render(
      <ToastProvider>
        <ToastViewport />
        <Toast>
          <ToastTitle>Toast Title</ToastTitle>
          <ToastDescription>Toast Description</ToastDescription>
        </Toast>
      </ToastProvider>
    );

    expect(screen.getByText("Toast Title")).toBeInTheDocument();
    expect(screen.getByText("Toast Description")).toBeInTheDocument();
  });

  it("renders with a close button", () => {
    render(
      <ToastProvider>
        <Toast>
          <ToastClose data-testid="close-button" />
        </Toast>
      </ToastProvider>
    );

    expect(screen.getByTestId("close-button")).toBeInTheDocument();
  });

  it("closes when the close button is clicked", () => {
    render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Toast Title</ToastTitle>
          <ToastClose data-testid="close-button" />
        </Toast>
      </ToastProvider>
    );

    const closeButton = screen.getByTestId("close-button");
    fireEvent.click(closeButton);

    expect(screen.queryByText("Toast Title")).not.toBeInTheDocument();
  });

  it("supports custom actions", () => {
    render(
      <ToastProvider>
        <Toast>
          <ToastTitle>Toast Title</ToastTitle>
          <ToastAction data-testid="action-button">Undo</ToastAction>
        </Toast>
      </ToastProvider>
    );

    expect(screen.getByTestId("action-button")).toBeInTheDocument();
  });

  it("applies custom styles correctly", () => {
    const { container } = render(
      <ToastProvider>
        <Toast className="custom-class">
          <ToastTitle>Toast Title</ToastTitle>
        </Toast>
      </ToastProvider>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
