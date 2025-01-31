import { fireEvent, render, screen } from "@testing-library/react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

describe("Drawer Component", () => {
  it("renders without crashing", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>
    );
    expect(screen.getByText("Open Drawer")).toBeInTheDocument();
  });

  it("opens the drawer when the trigger is clicked", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
        </DrawerContent>
      </Drawer>
    );

    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Drawer Title")).toBeInTheDocument();
    expect(screen.getByText("Drawer Description")).toBeInTheDocument();
  });

  it("closes the drawer when the close button is clicked", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
          <DrawerClose>Close</DrawerClose>
        </DrawerContent>
      </Drawer>
    );

    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Drawer Title")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));
    expect(screen.queryByText("Drawer Title")).not.toBeInTheDocument();
  });

  it("closes the drawer when clicking outside", () => {
    render(
      <Drawer>
        <DrawerTrigger>Open Drawer</DrawerTrigger>
        <DrawerContent>
          <DrawerTitle>Drawer Title</DrawerTitle>
          <DrawerDescription>Drawer Description</DrawerDescription>
        </DrawerContent>
      </Drawer>
    );

    fireEvent.click(screen.getByText("Open Drawer"));
    expect(screen.getByText("Drawer Title")).toBeInTheDocument();

    fireEvent.click(document.body);
    expect(screen.queryByText("Drawer Title")).not.toBeInTheDocument();
  });
});
