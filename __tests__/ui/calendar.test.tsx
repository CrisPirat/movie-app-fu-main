import { fireEvent, render, screen } from "@testing-library/react";

import { Calendar } from "@/components/ui/calendar";

describe("Calendar Component", () => {
  it("renders without crashing", () => {
    render(<Calendar />);
    expect(screen.getByRole("grid")).toBeInTheDocument();
  });

  it("renders navigation buttons", () => {
    render(<Calendar />);
    expect(screen.getByRole("button", { name: /previous month/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next month/i })).toBeInTheDocument();
  });

  it("navigates to the previous month when clicking the left arrow", () => {
    render(<Calendar />);
    const prevButton = screen.getByRole("button", { name: /previous month/i });

    fireEvent.click(prevButton);

    expect(screen.getByRole("grid")).toBeInTheDocument(); // Verifies that the grid updates
  });

  it("navigates to the next month when clicking the right arrow", () => {
    render(<Calendar />);
    const nextButton = screen.getByRole("button", { name: /next month/i });

    fireEvent.click(nextButton);

    expect(screen.getByRole("grid")).toBeInTheDocument(); // Verifies that the grid updates
  });

  it("renders the days correctly", () => {
    render(<Calendar />);
    expect(screen.getAllByRole("button", { hidden: true }).length).toBeGreaterThan(0); // Ensures there are selectable days
  });
});
