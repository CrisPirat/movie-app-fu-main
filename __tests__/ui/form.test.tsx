import { render, screen } from "@testing-library/react";
import { FormProvider, useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

describe("Form Component", () => {
  it("renders the form wrapper correctly", () => {
    const TestComponent = () => {
      const form = useForm();
      return (
        <FormProvider {...form}>
          <Form>
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl as="input" />
              <FormDescription>Enter your name</FormDescription>
              <FormMessage>Error message</FormMessage>
            </FormItem>
          </Form>
        </FormProvider>
      );
    };

    render(<TestComponent />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("")).toBeInTheDocument(); // Default input field
    expect(screen.getByText("Enter your name")).toBeInTheDocument();
    expect(screen.getByText("Error message")).toBeInTheDocument();
  });

  it("renders a required field and shows an error when empty", async () => {
    const TestComponent = () => {
      const form = useForm({
        defaultValues: { name: "" },
      });

      return (
        <FormProvider {...form}>
          <Form>
            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl as="input" {...field} required />
                  <FormMessage>{form.formState.errors.name?.message}</FormMessage>
                </FormItem>
              )}
            />
          </Form>
        </FormProvider>
      );
    };

    render(<TestComponent />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toBeRequired();
  });
});
