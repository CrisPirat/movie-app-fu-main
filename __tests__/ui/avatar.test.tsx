import { render, screen } from "@testing-library/react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

describe("Avatar Component", () => {
  it("renders the Avatar component without crashing", () => {
    render(<Avatar />);
    expect(screen.getByTestId("avatar-root")).toBeInTheDocument();
  });

  it("renders the Avatar image when a valid src is provided", () => {
    render(
      <Avatar>
        <AvatarImage src="/test-image.jpg" alt="User Avatar" data-testid="avatar-img" />
      </Avatar>
    );
    expect(screen.getByTestId("avatar-img")).toBeInTheDocument();
  });

  it("renders the AvatarFallback when no image is provided", () => {
    render(
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
    );
    expect(screen.getByText("AB")).toBeInTheDocument();
  });
});
