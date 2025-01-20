package com.example.backend.service;

import com.example.backend.entity.Product;
import com.example.backend.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    // Método para crear un producto
    public Product createProduct(Product product) {
        return productRepository.save(product);
    }

    // Método para obtener todos los productos
    public List<Product> findAllProducts() {
        return productRepository.findAll();
    }

    // Método para obtener un producto por ID
    public Optional<Product> findProductById(Long id) {
        return productRepository.findById(id);
    }

    // Método para actualizar un producto existente
    public Product updateProduct(Long id, Product updatedProduct) {
        return productRepository.findById(id)
            .map(existingProduct -> {
                existingProduct.setNombre(updatedProduct.getNombre());
                existingProduct.setCategoria(updatedProduct.getCategoria());
                existingProduct.setPrecio(updatedProduct.getPrecio());
                existingProduct.setCantidad(updatedProduct.getCantidad());
                return productRepository.save(existingProduct);
            })
            .orElseThrow(() -> new RuntimeException("Producto no encontrado"));
    }

    // Método para eliminar un producto
    public void deleteProduct(Long id) {
        productRepository.deleteById(id);
    }
}
