import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

describe("Sheet Component", () => {
  it("renders without crashing", () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Sheet Title</SheetTitle>
            <SheetDescription>Sheet Description</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    );

    expect(screen.getByText("Open Sheet")).toBeInTheDocument();
  });

  it("opens the sheet when the trigger is clicked", async () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );

    fireEvent.click(screen.getByText("Open Sheet"));

    await waitFor(() => {
      expect(screen.getByText("Sheet Title")).toBeInTheDocument();
    });
  });

  it("closes the sheet when the close button is clicked", async () => {
    render(
      <Sheet>
        <SheetTrigger>Open Sheet</SheetTrigger>
        <SheetContent>
          <SheetTitle>Sheet Title</SheetTitle>
          <SheetClose>Close</SheetClose>
        </SheetContent>
      </Sheet>
    );

    fireEvent.click(screen.getByText("Open Sheet"));
    expect(screen.getByText("Sheet Title")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    await waitFor(() => {
      expect(screen.queryByText("Sheet Title")).not.toBeInTheDocument();
    });
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <Sheet>
        <SheetContent className="custom-class">
          <SheetTitle>Sheet Title</SheetTitle>
        </SheetContent>
      </Sheet>
    );

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
