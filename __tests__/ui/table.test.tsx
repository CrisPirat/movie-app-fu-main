import { render, screen } from "@testing-library/react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

describe("Table Component", () => {
  it("renders without crashing", () => {
    render(
      <Table>
        <TableCaption>Test Table</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Column 1</TableHead>
            <TableHead>Column 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Data 1</TableCell>
            <TableCell>Data 2</TableCell>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell>Footer 1</TableCell>
            <TableCell>Footer 2</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    );

    expect(screen.getByText("Test Table")).toBeInTheDocument();
    expect(screen.getByText("Column 1")).toBeInTheDocument();
    expect(screen.getByText("Data 1")).toBeInTheDocument();
    expect(screen.getByText("Footer 1")).toBeInTheDocument();
  });

  it("renders the correct number of rows and columns", () => {
    render(
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Header 1</TableHead>
            <TableHead>Header 2</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>Row 1, Col 1</TableCell>
            <TableCell>Row 1, Col 2</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Row 2, Col 1</TableCell>
            <TableCell>Row 2, Col 2</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    );

    expect(screen.getAllByRole("row")).toHaveLength(3); // 1 header + 2 body rows
    expect(screen.getAllByRole("columnheader")).toHaveLength(2);
    expect(screen.getAllByRole("cell")).toHaveLength(4);
  });

  it("applies custom styles correctly", () => {
    const { container } = render(<Table className="custom-class" />);
    expect(container.firstChild).toHaveClass("custom-class");
  });
});
