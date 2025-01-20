# Proyecto: Gestión de Inventario de Productos

## Descripción del Proyecto

Aplicación que hace parte del reto técnico para la vacante del Banco de Bogotá, la cual permite a los usuarios gestionar un inventario de productos. La aplicación está dividida en un **frontend** desarrollado con React y un **backend** desarrollado con Spring Boot. Las funcionalidades son:

- Listar productos existentes.
- Agregar nuevos productos.
- Modificar productos existentes.
- Eliminar productos.

---

## Tecnologías Usadas

### Frontend
- **Framework:** React
- **Pruebas Unitarias:** Jest

### Backend
- **Lenguaje:** Java
- **Framework:** Spring Boot
- **Pruebas Unitarias:** JUnit
- **Base de Datos:** H2 en memoria

---

## Instrucciones para Ejecutar el Proyecto

### Prerrequisitos

1. **Node.js** (versión 18 o superior) y **npm** instalados para el frontend.
2. **Java 17** o superior instalado para el backend.
3. **Maven** instalado para gestionar dependencias del backend.

---

### Pasos para el Backend

1. Para clonar el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd backend
   ```

2. Para construir el proyecto con Maven (dentro de backend):
   ```bash
   mvn clean install
   ```

3. Ejecutar la aplicación (backend):
   ```bash
   mvn spring-boot:run
   ```

4. Acceder a la consola de H2 para inspeccionar la base de datos (opcional):
   - URL: `http://localhost:8080/h2-console`
   - Credenciales: `jdbc:h2:mem:demo`, usuario: `sa`, contraseña: `sa`

---

### Pasos para el Frontend

1. Navegar a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instalar las dependencias:
   ```bash
   npm install
   ```

3. Ejecutar la aplicación:
   ```bash
   npm run dev
   ```

4. Acceder al frontend en el navegador, desde `http://localhost:5173/`.

5. Ingresar/Actualizar producto.

6. Actualizar navegador (F5).

---

### Pruebas Unitarias

#### Backend

1. Para ejecutar las pruebas unitarias del backend, se debe usar el comando:
   ```bash
   mvn test
   ```

#### Frontend

1. Para ejecutar las pruebas unitarias del frontend, se debe usar el comando:
   ```bash
   npm test
   ```

---

## Validaciones

### Frontend
- Todos los campos son obligatorios.
- El precio debe ser un número positivo.
- La cantidad debe ser un número entero no negativo.

### Backend
- Validaciones implementadas usando anotaciones de validación de Bean Validation:
  - `@NotBlank`
  - `@Positive`
  - `@Min`

---

## Despliegue en AWS (Plus Adicional)

### Propuesta de Despliegue

#### Frontend
- **AWS S3:** Para el hosting del sitio web estático.
- **AWS CloudFront:** Para distribución de contenido global.

#### Backend
- **AWS Elastic Beanstalk:** Para desplegar la aplicación Spring Boot.
- **AWS RDS:** Para la base de datos relacional.

---

## Estructura del Proyecto

```
reto-tecnico/
├── backend/
│   ├── src/
│   ├── pom.xml
│   ├── README.md
│   └── ...
├── frontend/
│   ├── src/
│   ├── package.json
│   ├── README.md
│   └── ...
```

---

## Autor

- jalexcode
