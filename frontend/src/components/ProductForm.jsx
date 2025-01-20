import React, { useState, useEffect } from "react";
import { createProduct, updateProduct } from "../services/productService";

const ProductForm = ({ onSubmit, initialData }) => {
  const [product, setProduct] = useState({
    id: null,
    nombre: "",
    categoria: "",
    precio: "",
    cantidad: "",
  });
  const [loading, setLoading] = useState(false); // Estado para manejar el cargando
  const [message, setMessage] = useState(""); // Mensaje de éxito o error

  // Sincronizar initialData con product
  useEffect(() => {
    if (initialData) {
      setProduct(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (product.id) {
        // Actualizar producto
        await updateProduct(product.id, product);
        setMessage(`Producto "${product.nombre}" actualizado exitosamente`);
      } else {
        // Crear producto
        await createProduct(product);
        setMessage(`Producto "${product.nombre}" guardado exitosamente`);
      }
      setProduct({ id: null, nombre: "", categoria: "", precio: "", cantidad: "" }); // Limpia el formulario
      if (onSubmit) onSubmit(); // Notificar a App.jsx para recargar lista
    } catch (error) {
      setMessage("Error al guardar el producto");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>{product.id ? "Editar Producto" : "Agregar Producto"}</h3>
      <div>
        <label htmlFor="nombre">Nombre:</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={product.nombre}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="categoria">Categoría:</label>
        <input
          type="text"
          id="categoria"
          name="categoria"
          value={product.categoria}
          onChange={handleChange}
          required
        />
      </div>

      <div>
        <label htmlFor="precio">Precio:</label>
        <input
          type="number"
          id="precio"
          name="precio"
          value={product.precio}
          onChange={handleChange}
          required
          min="0.01"
          step="0.01"
        />
      </div>

      <div>
        <label htmlFor="cantidad">Cantidad:</label>
        <input
          type="number"
          id="cantidad"
          name="cantidad"
          value={product.cantidad}
          onChange={handleChange}
          required
          min="0"
        />
      </div>

      <button type="submit" disabled={loading}>
        {loading ? "Guardando..." : product.id ? "Actualizar" : "Guardar"}
      </button>
      {product.id && (
        <button
          type="button"
          onClick={() =>
            setProduct({ id: null, nombre: "", categoria: "", precio: "", cantidad: "" })
          }
        >
          Cancelar
        </button>
      )}
      {message && <p>{message}</p>}
    </form>
  );
};

export default ProductForm;
