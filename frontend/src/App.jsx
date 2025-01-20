import React, { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

const App = () => {
  const [editingProduct, setEditingProduct] = useState(null);

  // Manejar la edición de productos
  const handleEdit = (product) => {
    setEditingProduct(product);
  };

  // Resetear el formulario después de guardar
  const handleFormSubmit = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      <h1>Gestión de Productos</h1>
      <ProductForm
        onSubmit={handleFormSubmit}
        initialData={editingProduct}
      />
      <ProductList onEdit={handleEdit} />
    </div>
  );
};

export default App;
