import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { expect, test } from "vitest";
import { MemoryRouter } from "react-router";

test("Renders the BookingForm heading", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );

  const headingElement = screen.getByRole("heading", { name: "Booking Form" });
  expect(headingElement).toBeInTheDocument();
});

test("Renders the choose date label", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const labelElement = screen.getByLabelText("Choose date");
  expect(labelElement).toBeInTheDocument();
});

test("Renders the choose time label", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const labelElement = screen.getByLabelText("Choose time");
  expect(labelElement).toBeInTheDocument();
});

// Verificar que la validacion con Html5 esta aplicada
test("Date input has required attribute", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const dateInput = screen.getByLabelText("Choose date");
  expect(dateInput).toHaveAttribute("required");
});

test("Time select has required attribute", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const timeSelect = screen.getByLabelText("Choose time");
  expect(timeSelect).toHaveAttribute("required");
});
test("Number of guest input has required, min and max attributes", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const guestInput = screen.getByLabelText("Number of guests");
  expect(guestInput).toHaveAttribute("min", "1");
  expect(guestInput).toHaveAttribute("max", "10");
});

test("Occasion select has required attribute", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveAttribute("required");
});

test("Occasion select has required attribute", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const occasionSelect = screen.getByLabelText("Occasion");
  expect(occasionSelect).toHaveAttribute("required");
});

test("Submit should be disabled when form is incomplete", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={[]}
        dispatch={() => {}}
        formData={{}}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const submitButton = screen.getByRole("button", {
    name: "Make Your reservation",
  });
  expect(submitButton).toBeDisabled();
});

test("Submit should be enabled when form is complete", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        formData={{
          date: "2023-12-31",
          time: "17:00",
          guests: 2,
          occasion: "Birthday",
        }}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const submitButton = screen.getByRole("button", {
    name: "Make Your reservation",
  });
  expect(submitButton).toBeEnabled();
});

test("Submit should be enabled when form is complete", () => {
  render(
    <MemoryRouter>
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        formData={{
          date: "2023-12-31",
          time: "17:00",
          guests: 11,
          occasion: "Birthday",
        }}
        setFormData={() => {}}
      />
    </MemoryRouter>
  );
  const submitButton = screen.getByRole("button", {
    name: "Make Your reservation",
  });
  expect(submitButton).toBeDisabled();
});
