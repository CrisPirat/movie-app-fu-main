import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

describe("Popover Component", () => {
  it("renders without crashing", () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    expect(screen.getByText("Open Popover")).toBeInTheDocument();
  });

  it("opens the popover when the trigger is clicked", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByText("Open Popover"));

    await waitFor(() => {
      expect(screen.getByText("Popover Content")).toBeInTheDocument();
    });
  });

  it("closes the popover when clicking outside", async () => {
    render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent>Popover Content</PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByText("Open Popover"));
    expect(screen.getByText("Popover Content")).toBeInTheDocument();

    fireEvent.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Popover Content")).not.toBeInTheDocument();
    });
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <Popover>
        <PopoverTrigger>Open Popover</PopoverTrigger>
        <PopoverContent className="custom-class">Popover Content</PopoverContent>
      </Popover>
    );

    fireEvent.click(screen.getByText("Open Popover"));

    expect(container.querySelector(".custom-class")).toBeInTheDocument();
  });
});
