import { fireEvent, render, screen } from "@testing-library/react";

import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

describe("Command Component", () => {
  it("renders without crashing", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Option 1</CommandItem>
          <CommandItem>Option 2</CommandItem>
        </CommandList>
      </Command>
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("renders a command dialog correctly", () => {
    render(
      <CommandDialog open>
        <CommandInput placeholder="Search..." />
      </CommandDialog>
    );
    expect(screen.getByPlaceholderText("Search...")).toBeInTheDocument();
  });

  it("displays items in the list", () => {
    render(
      <Command>
        <CommandList>
          <CommandItem>Item 1</CommandItem>
          <CommandItem>Item 2</CommandItem>
        </CommandList>
      </Command>
    );

    expect(screen.getByText("Item 1")).toBeInTheDocument();
    expect(screen.getByText("Item 2")).toBeInTheDocument();
  });

  it("shows empty state when no items are found", () => {
    render(
      <Command>
        <CommandList>
          <CommandEmpty>No results</CommandEmpty>
        </CommandList>
      </Command>
    );

    expect(screen.getByText("No results")).toBeInTheDocument();
  });

  it("filters items based on input", () => {
    render(
      <Command>
        <CommandInput placeholder="Search..." />
        <CommandList>
          <CommandItem>Apple</CommandItem>
          <CommandItem>Banana</CommandItem>
        </CommandList>
      </Command>
    );

    const input = screen.getByPlaceholderText("Search...");
    fireEvent.change(input, { target: { value: "Apple" } });

    expect(screen.getByText("Apple")).toBeInTheDocument();
    expect(screen.queryByText("Banana")).not.toBeInTheDocument();
  });
});
