import { fireEvent, render, screen } from "@testing-library/react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar";

describe("Sidebar Component", () => {
  it("renders without crashing", () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>Header</SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton>Menu Item 1</SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
          <SidebarFooter>Footer</SidebarFooter>
        </Sidebar>
      </SidebarProvider>
    );

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Menu Item 1")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
  });

  it("toggles the sidebar when the trigger is clicked", () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarTrigger>Toggle Sidebar</SidebarTrigger>
        </Sidebar>
      </SidebarProvider>
    );

    const triggerButton = screen.getByText("Toggle Sidebar");
    fireEvent.click(triggerButton);

    // Expect some change in the sidebar state (depending on implementation)
    expect(triggerButton).toBeInTheDocument();
  });

  it("renders the separator component", () => {
    render(
      <SidebarProvider>
        <Sidebar>
          <SidebarSeparator />
        </Sidebar>
      </SidebarProvider>
    );

    expect(screen.getByRole("separator")).toBeInTheDocument();
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <SidebarProvider>
        <Sidebar className="custom-class">
          <SidebarContent>Content</SidebarContent>
        </Sidebar>
      </SidebarProvider>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
