import { fireEvent, render, screen } from "@testing-library/react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

describe("Accordion Component", () => {
  it("renders without crashing", () => {
    render(
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    expect(screen.getByText("Trigger")).toBeInTheDocument();
  });

  it("expands content on click", async () => {
    render(
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.click(trigger);

    expect(await screen.findByText("Content")).toBeVisible();
  });

  it("collapses content on second click", async () => {
    render(
      <Accordion collapsible type="single">
        <AccordionItem value="item-1">
          <AccordionTrigger>Trigger</AccordionTrigger>
          <AccordionContent>Content</AccordionContent>
        </AccordionItem>
      </Accordion>
    );

    const trigger = screen.getByText("Trigger");
    fireEvent.click(trigger);
    expect(await screen.findByText("Content")).toBeVisible();

    fireEvent.click(trigger);
    expect(screen.queryByText("Content")).not.toBeInTheDocument();
  });
});
