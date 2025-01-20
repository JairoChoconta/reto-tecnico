import axios from "axios";

const API_URL = "http://localhost:8080/products";

// Crear un producto
export const createProduct = async (product) => {
  const response = await axios.post(API_URL, product);
  return response.data;
};

// Actualizar un producto
export const updateProduct = async (id, product) => {
  const response = await axios.put(`${API_URL}/${id}`, product);
  return response.data;
};

// Eliminar un producto
export const deleteProduct = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};

// Obtener todos los productos
export const fetchProducts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};
