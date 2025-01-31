import { render, screen } from "@testing-library/react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

describe("Breadcrumb Component", () => {
  it("renders without crashing", () => {
    render(
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Current Page</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    );

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Current Page")).toBeInTheDocument();
  });

  it("renders the breadcrumb separator", () => {
    render(<BreadcrumbSeparator />);
    expect(screen.getByRole("presentation", { hidden: true })).toBeInTheDocument();
  });

  it("renders breadcrumb ellipsis", () => {
    render(<BreadcrumbEllipsis />);

    expect(screen.getByText("More")).toBeInTheDocument();
  });

  it("renders breadcrumb link with correct href", () => {
    render(<BreadcrumbLink href="/about">About</BreadcrumbLink>);

    expect(screen.getByText("About")).toHaveAttribute("href", "/about");
  });

  it("renders the current breadcrumb page correctly", () => {
    render(<BreadcrumbPage>Dashboard</BreadcrumbPage>);

    expect(screen.getByText("Dashboard")).toBeInTheDocument();
    expect(screen.getByText("Dashboard")).toHaveAttribute("aria-current", "page");
  });
});
