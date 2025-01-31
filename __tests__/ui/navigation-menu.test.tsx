import { fireEvent, render, screen } from "@testing-library/react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

describe("NavigationMenu Component", () => {
  it("renders without crashing", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    expect(screen.getByText("Menu")).toBeInTheDocument();
  });

  it("opens the menu when trigger is clicked", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    fireEvent.click(screen.getByText("Menu"));
    expect(screen.getByText("Test Link")).toBeInTheDocument();
  });

  it("closes the menu when clicking outside", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    fireEvent.click(screen.getByText("Menu"));
    expect(screen.getByText("Test Link")).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(screen.queryByText("Test Link")).not.toBeInTheDocument();
  });

  it("navigates correctly when clicking a menu link", () => {
    render(
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Menu</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink href="/test">Test Link</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    );

    fireEvent.click(screen.getByText("Menu"));
    const link = screen.getByText("Test Link");
    expect(link).toHaveAttribute("href", "/test");
  });
});
