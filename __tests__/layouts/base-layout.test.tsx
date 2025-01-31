import { render, screen } from "@testing-library/react";

import BaseLayout from "@/components/layouts/base-layout";

describe("BaseLayout Component", () => {
  it("renders the layout structure correctly", () => {
    render(
      <BaseLayout>
        <div data-testid="test-child">Test Content</div>
      </BaseLayout>
    );

    expect(screen.getByTestId("test-child")).toBeInTheDocument();
    expect(screen.getByRole("banner")).toBeInTheDocument();
    expect(screen.getByRole("contentinfo")).toBeInTheDocument();
  });

  it("matches snapshot", () => {
    const { asFragment } = render(
      <BaseLayout>
        <div data-testid="test-child">Test Content</div>
      </BaseLayout>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
