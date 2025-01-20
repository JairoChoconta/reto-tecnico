import React, { useEffect, useState } from "react";
import { fetchProducts, deleteProduct } from "../services/productService";

const ProductList = ({ onEdit }) => {
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState("");

  // Cargar productos desde el backend
  const fetchAllProducts = async () => {
    try {
      const data = await fetchProducts();
      setProducts(data);
    } catch (error) {
      setMessage("Error al cargar los productos");
      console.error(error);
    }
  };

  // Eliminar un producto
  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      setMessage(`Producto con ID ${id} eliminado exitosamente`);
      fetchAllProducts(); // Recargar lista de productos
    } catch (error) {
      setMessage("Error al eliminar el producto");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div>
      <h2>Lista de Productos</h2>
      {message && <p>{message}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
              <td>{product.categoria}</td>
              <td>{product.precio}</td>
              <td>{product.cantidad}</td>
              <td>
                <button onClick={() => onEdit(product)}>Editar</button>
                <button onClick={() => handleDelete(product.id)}>Eliminar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
