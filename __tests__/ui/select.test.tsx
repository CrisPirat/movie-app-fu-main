import { fireEvent, render, screen, waitFor } from "@testing-library/react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

describe("Select Component", () => {
  it("renders without crashing", () => {
    render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    expect(screen.getByText("Select an option")).toBeInTheDocument();
  });

  it("opens the dropdown when clicked", async () => {
    render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    fireEvent.click(screen.getByText("Select an option"));

    await waitFor(() => {
      expect(screen.getByText("Option 1")).toBeInTheDocument();
    });
  });

  it("closes the dropdown when an option is selected", async () => {
    render(
      <Select>
        <SelectTrigger>Select an option</SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
        </SelectContent>
      </Select>
    );

    fireEvent.click(screen.getByText("Select an option"));
    fireEvent.click(screen.getByText("Option 1"));

    await waitFor(() => {
      expect(screen.queryByText("Option 1")).not.toBeInTheDocument();
    });
  });

  it("updates the selected value correctly", async () => {
    render(
      <Select>
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="option1">Option 1</SelectItem>
          <SelectItem value="option2">Option 2</SelectItem>
        </SelectContent>
      </Select>
    );

    fireEvent.click(screen.getByRole("combobox"));
    fireEvent.click(screen.getByText("Option 2"));

    await waitFor(() => {
      expect(screen.getByText("Option 2")).toBeInTheDocument();
    });
  });

  it("applies custom classes correctly", () => {
    const { container } = render(
      <Select className="custom-class">
        <SelectTrigger>Select an option</SelectTrigger>
      </Select>
    );

    expect(container.firstChild).toHaveClass("custom-class");
  });
});
