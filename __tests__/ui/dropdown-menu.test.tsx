import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

describe("DropdownMenu Component", () => {
  it("opens the dropdown menu when trigger is clicked", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
          <DropdownMenuItem>Option 2</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = screen.getByText("Open Menu");

    // ✅ Use pointerDown before click to simulate a real event
    fireEvent.pointerDown(trigger);
    fireEvent.click(trigger);

    // ✅ Wait for the dropdown options to appear
    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    expect(screen.getByText("Option 2")).toBeInTheDocument();
  });

  it("closes the dropdown menu when clicking outside", async () => {
    render(
      <DropdownMenu>
        <DropdownMenuTrigger>Open Menu</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Option 1</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );

    const trigger = screen.getByText("Open Menu");

    // ✅ Open the dropdown
    fireEvent.pointerDown(trigger);
    fireEvent.click(trigger);

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });

    // ✅ Click outside to close the dropdown
    fireEvent.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });
  });
});
