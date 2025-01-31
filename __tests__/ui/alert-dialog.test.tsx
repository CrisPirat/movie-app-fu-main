import { fireEvent, render, screen } from "@testing-library/react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

describe("AlertDialog Component", () => {
  it("renders without crashing", () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );

    expect(screen.getByText("Open Dialog")).toBeInTheDocument();
  });

  it("opens the dialog when trigger is clicked", async () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );

    fireEvent.click(screen.getByText("Open Dialog"));
    expect(await screen.findByText("Dialog Title")).toBeVisible();
  });

  it("closes the dialog when cancel is clicked", async () => {
    render(
      <AlertDialog>
        <AlertDialogTrigger>Open Dialog</AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogTitle>Dialog Title</AlertDialogTitle>
          <AlertDialogDescription>Dialog Description</AlertDialogDescription>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Confirm</AlertDialogAction>
        </AlertDialogContent>
      </AlertDialog>
    );

    fireEvent.click(screen.getByText("Open Dialog"));
    expect(await screen.findByText("Dialog Title")).toBeVisible();

    fireEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByText("Dialog Title")).not.toBeInTheDocument();
  });
});
