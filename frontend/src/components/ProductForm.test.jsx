import React from "react";
import { render, screen } from "@testing-library/react";
import ProductForm from "./ProductForm";

test("debería renderizar el formulario de producto", () => {
  render(<ProductForm />);
  expect(screen.getByLabelText(/Nombre/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Categoría/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Precio/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/Cantidad/i)).toBeInTheDocument();
  expect(screen.getByText(/Guardar/i)).toBeInTheDocument();
});
