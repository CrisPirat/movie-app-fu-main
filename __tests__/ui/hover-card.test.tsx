import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

describe("HoverCard Component", () => {
  it("shows content when hovered", async () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover over me</HoverCardTrigger>
        <HoverCardContent>Hovered Content</HoverCardContent>
      </HoverCard>
    );

    const trigger = screen.getByText("Hover over me");

    fireEvent.mouseEnter(trigger);

    await waitFor(() => {
      expect(screen.getByText("Hovered Content")).toBeInTheDocument();
    });
  });

  it("hides content when the mouse leaves", async () => {
    render(
      <HoverCard>
        <HoverCardTrigger>Hover over me</HoverCardTrigger>
        <HoverCardContent>Hovered Content</HoverCardContent>
      </HoverCard>
    );

    const trigger = screen.getByText("Hover over me");

    fireEvent.mouseEnter(trigger);
    await waitFor(() => {
      expect(screen.getByText("Hovered Content")).toBeInTheDocument();
    });

    fireEvent.mouseLeave(trigger);
    await waitFor(() => {
      expect(screen.queryByText("Hovered Content")).not.toBeInTheDocument();
    });
  });
});
