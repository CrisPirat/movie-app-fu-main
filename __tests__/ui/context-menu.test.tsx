import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

describe("ContextMenu Component", () => {
  it("closes the context menu when clicking outside", async () => {
    render(
      <ContextMenu>
        <ContextMenuTrigger>
          <button>Right Click Me</button>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>Option 1</ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    );

    fireEvent.contextMenu(screen.getByText("Right Click Me"));
    expect(screen.getByText("Option 1")).toBeInTheDocument();

    fireEvent.click(document.body);

    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });
  });
});
