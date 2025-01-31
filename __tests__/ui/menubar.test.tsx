import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

describe("Menubar Component", () => {
  it("renders without crashing", () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Option 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("opens the menubar when clicked", async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Option 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    fireEvent.click(screen.getByText("Menu"));

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });
  });

  it("closes the menubar when clicking outside", async () => {
    render(
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Menu</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Option 1</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    );

    fireEvent.click(screen.getByText("Menu"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();

    fireEvent.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });
  });
});
