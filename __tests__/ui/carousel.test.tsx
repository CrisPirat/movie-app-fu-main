import { fireEvent, render, screen } from "@testing-library/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

describe("Carousel Component", () => {
  it("renders without crashing", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
      </Carousel>
    );
    expect(screen.getByRole("region", { name: /carousel/i })).toBeInTheDocument();
  });

  it("renders previous and next buttons", () => {
    render(
      <Carousel>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    expect(screen.getByRole("button", { name: /previous slide/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /next slide/i })).toBeInTheDocument();
  });

  it("scrolls to the next slide when clicking the next button", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselNext />
      </Carousel>
    );

    fireEvent.click(screen.getByRole("button", { name: /next slide/i }));
    expect(screen.getByText("Slide 2")).toBeInTheDocument();
  });

  it("scrolls to the previous slide when clicking the previous button", () => {
    render(
      <Carousel>
        <CarouselContent>
          <CarouselItem>Slide 1</CarouselItem>
          <CarouselItem>Slide 2</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    );

    fireEvent.click(screen.getByRole("button", { name: /next slide/i }));
    fireEvent.click(screen.getByRole("button", { name: /previous slide/i }));

    expect(screen.getByText("Slide 1")).toBeInTheDocument();
  });
});
