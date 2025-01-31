import { act, fireEvent, render, screen, waitFor } from "@testing-library/react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

describe("Tooltip Component", () => {
  it("renders without crashing", () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover over me</TooltipTrigger>
          <TooltipContent>Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    expect(screen.getByText("Hover over me")).toBeInTheDocument();
  });

  it("displays the tooltip when hovered", async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover over me</TooltipTrigger>
          <TooltipContent className="tooltip-content">Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover over me");

    // Trigger mouse enter event inside act()
    act(() => {
      fireEvent.mouseEnter(trigger);
    });

    await waitFor(() => {
      expect(document.body.querySelector(".tooltip-content")).toBeInTheDocument();
    });
  });

  it("hides the tooltip when the mouse leaves", async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover over me</TooltipTrigger>
          <TooltipContent className="tooltip-content">Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover over me");

    act(() => {
      fireEvent.mouseEnter(trigger);
    });

    await waitFor(() => {
      expect(document.body.querySelector(".tooltip-content")).toBeInTheDocument();
    });

    act(() => {
      fireEvent.mouseLeave(trigger);
    });

    await waitFor(() => {
      expect(document.body.querySelector(".tooltip-content")).not.toBeInTheDocument();
    });
  });

  it("applies custom styles correctly", async () => {
    render(
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>Hover over me</TooltipTrigger>
          <TooltipContent className="custom-class">Tooltip Text</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );

    const trigger = screen.getByText("Hover over me");

    act(() => {
      fireEvent.mouseEnter(trigger);
    });

    await waitFor(() => {
      expect(document.body.querySelector(".custom-class")).toBeInTheDocument();
    });
  });
});
