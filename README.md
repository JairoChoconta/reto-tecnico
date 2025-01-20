# Proyecto: Gestión de Inventario de Productos

## Descripción del Proyecto

Esta aplicación permite a los usuarios gestionar un inventario de productos. Las funcionalidades incluyen:

- Listar productos existentes.
- Agregar nuevos productos.
- Modificar productos existentes.
- Eliminar productos.

La aplicación está dividida en un **frontend** desarrollado con React y un **backend** desarrollado con Spring Boot.

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

1. Clona el repositorio:
   ```bash
   git clone <URL-del-repositorio>
   cd backend
   ```

2. Construye el proyecto con Maven:
   ```bash
   mvn clean install
   ```

3. Ejecuta la aplicación:
   ```bash
   mvn spring-boot:run
   ```

4. Accede a la consola de H2 para inspeccionar la base de datos (opcional):
   - URL: `http://localhost:8080/h2-console`
   - Credenciales: `jdbc:h2:mem:demo`, usuario: `sa`, contraseña: `sa`

---

### Pasos para el Frontend

1. Navega a la carpeta del frontend:
   ```bash
   cd frontend
   ```

2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta la aplicación:
   ```bash
   npm start
   ```

4. Accede al frontend desde tu navegador en `http://localhost:3000`.

---

### Pruebas Unitarias

#### Backend

1. Para ejecutar las pruebas unitarias del backend, usa el comando:
   ```bash
   mvn test
   ```

#### Frontend

1. Para ejecutar las pruebas unitarias del frontend, usa el comando:
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

## Autores

- jalexcode
