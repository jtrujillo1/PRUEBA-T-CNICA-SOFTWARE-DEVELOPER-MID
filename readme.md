# Plataforma de Blogs - Esquema de Base de Datos

## Descripción

Este proyecto proporciona un esquema de base de datos para una plataforma de blogs sencilla. La plataforma admite usuarios, publicaciones de blog, comentarios y etiquetas. Este diseño asegura la flexibilidad para manejar relaciones entre usuarios y contenido, así como la capacidad de categorizar publicaciones mediante el uso de etiquetas.

## Tablas Principales

### 1. **Users**
Esta tabla almacena la información de los usuarios registrados en la plataforma.

- **Campos:**
  - `id`: Identificador único del usuario.
  - `firstName`: Nombre de usuario.
  - `LastName`: apellido de usuario.
  - `email`: Correo electrónico, debe ser único.
  - `createdAt`: Fecha de creación del usuario.
  - `updatedAt`: Fecha de la última actualización de la información del usuario.

### 2. **Posts**
Esta tabla contiene las publicaciones creadas por los usuarios.

- **Campos:**
  - `id`: Identificador único de la publicación.
  - `userId`: Referencia al usuario que creó la publicación.
  - `title`: Título de la publicación.
  - `content`: Contenido del blog.
  - `createdAt`: Fecha de creación de la publicación.
  - `updatedAt`: Fecha de la última actualización de la publicación.

### 3. **Comments**
Esta tabla almacena los comentarios hechos por los usuarios en las publicaciones.

- **Campos:**
  - `id`: Identificador único del comentario.
  - `postId`: Referencia a la publicación donde se hizo el comentario.
  - `userId`: Referencia al usuario que hizo el comentario.
  - `comment`: Contenido del comentario.
  - `createdAt`: Fecha de creación del comentario.
  - `updatedAt`: Fecha de la última actualización del comentario.

### 4. **Tags**
Esta tabla almacena las etiquetas que se pueden asignar a las publicaciones.

- **Campos:**
  - `id`: Identificador único de la etiqueta.
  - `name`: Nombre único de la etiqueta.
  - `Code`: Nombre único de la etiqueta.
  - `createdAt`: Fecha de creación de etiqueta.
  - `updatedAt`: Fecha de la última actualización de etiqueta.

### 5. **PostTags**
Esta tabla intermedia establece una relación muchos a muchos entre publicaciones y etiquetas.

- **Campos:**
  - `postId`: Referencia a la publicación.
  - `tagId`: Referencia a la etiqueta.


## Relaciones

- **Usuarios - Publicaciones (1:N)**: Un usuario puede tener varias publicaciones.
- **Publicaciones - Comentarios (1:N)**: Una publicación puede tener varios comentarios.
- **Usuarios - Comentarios (1:N)**: Un usuario puede hacer varios comentarios en diferentes publicaciones.
- **Publicaciones - Etiquetas (N:M)**: Una publicación puede tener varias etiquetas, y una etiqueta puede estar asociada a varias publicaciones.

## Requisitos para la Base de Datos

1. **Motor de base de datos**: Se recomienda usar **MySQL** o **PostgreSQL**, pero el diseño es agnóstico al motor y puede adaptarse a cualquier sistema de gestión de bases de datos relacional.
2. **Integridad referencial**: Se implementan claves foráneas para asegurar que las relaciones entre las tablas sean coherentes.
3. **Eliminación en cascada**: Se utiliza `ON DELETE CASCADE` en las relaciones clave para asegurar que cuando un registro principal se elimine, sus registros relacionados también se eliminen de forma automática (por ejemplo, si se elimina un post, también se eliminan los comentarios y relaciones de etiquetas asociadas).

## Consideraciones futuras

Este diseño permite futuras expansiones, como la posibilidad de agregar:
- **Categorías de publicaciones**: Para agrupar publicaciones bajo temas generales.
- **Sistema de 'Me Gusta' o Reacciones**: Los usuarios pueden reaccionar a publicaciones o comentarios.
- **Sistema de Roles**: Implementación de roles de usuario como 'Admin' o 'Editor' para gestionar la plataforma.

En el repsitorio puede correr los script en el archivo que se encuentra en /database/dataBase.sql


# Función `TwoSum`

## Descripción

La función `TwoSum` toma una lista de números enteros (array `nums`) y un número entero de destino (`target`). La función encuentra dos números en la lista que, cuando se suman, dan como resultado el número de destino. Si existen esos dos números, la función devuelve los **índices** de dichos números en la lista. Si no se encuentra ninguna combinación que sume el número de destino, la función devuelve `null`.

Esta función utiliza una estrategia de búsqueda con un **mapa hash** (objeto `Map` en JavaScript) para optimizar la búsqueda de los números.

## Ejemplo de Uso

```javascript
const nums = [2, 7, 11, 15];
const target = 9;
const result = TwoSum(nums, target); // [0, 1]
console.log(result);

git clone https://github.com/jtrujillo1/PRUEBA-T-CNICA-SOFTWARE-DEVELOPER-MID.git
cd PRUEBA-T-CNICA-SOFTWARE-DEVELOPER-MID
node funtions/twoSum.js



# Sistema de Gestión de Bibliotecas

## Descripción

Este proyecto es un **sistema sencillo de gestión de bibliotecas** que permite administrar libros, miembros y la disponibilidad de los ítems. El sistema permite que los miembros de la biblioteca puedan **prestar y devolver libros**, al mismo tiempo que se mantiene un registro actualizado de los **libros disponibles** y los **libros prestados**.

El sistema sigue un diseño orientado a objetos, respetando la modularidad y aplicando buenas prácticas de desarrollo. Este enfoque permite que sea fácilmente extensible, facilitando la futura inclusión de nuevos tipos de ítems (como revistas, DVDs, etc.).

## Características

- **Libros**: Cada libro tiene un título, autor, y número de copias disponibles.
- **Miembros**: Los miembros pueden prestar y devolver libros.
- **Biblioteca**: La biblioteca almacena un catálogo de libros y un registro de los miembros.
- **Préstamo y devolución**: Se controla el estado de los préstamos y devoluciones, actualizando las copias disponibles de los libros en cada transacción.
- **Búsqueda de libros**: Los libros pueden buscarse por título en la biblioteca.
- **Historial de préstamos**: Los miembros tienen un registro de los libros que han tomado prestados.

## Arquitectura

El sistema se compone de tres clases principales:

1. **Clase `Book`**: Representa los libros de la biblioteca. Cada libro tiene un título, autor y un número de copias disponibles para prestar. Se pueden prestar y devolver libros.
2. **Clase `Member`**: Representa a los miembros de la biblioteca. Los miembros pueden prestar y devolver libros. Además, se mantiene un registro de los libros que han prestado.
3. **Clase `Library`**: Gestiona el catálogo de libros y los miembros registrados. Permite agregar libros, registrar miembros, y realizar búsquedas de libros por título.

### **1. Clase `Book`**

Esta clase modela el concepto de un libro en la biblioteca.

#### Atributos:

- `id`: Identificador único del libro.
- `title`: Título del libro.
- `author`: Autor del libro.
- `availableCopies`: Número de copias disponibles del libro.

#### Métodos:

- `isAvailable()`: Verifica si hay copias disponibles para prestar.
- `borrowBook()`: Disminuye la cantidad de copias disponibles cuando un libro es prestado.
- `returnBook()`: Aumenta la cantidad de copias disponibles cuando un libro es devuelto.

### **2. Clase `Member`**

Esta clase representa a un miembro registrado en la biblioteca, quien puede prestar y devolver libros.

#### Atributos:

- `id`: Identificador único del miembro.
- `name`: Nombre del miembro.
- `borrowedBooks`: Lista de libros que el miembro ha tomado prestado.

#### Métodos:

- `borrow(book)`: Permite que el miembro tome prestado un libro si hay copias disponibles.
- `return(book)`: Permite que el miembro devuelva un libro.
- `listBorrowedBooks()`: Muestra la lista de libros que el miembro ha tomado prestado.

### **3. Clase `Library`**

Esta clase modela una biblioteca, la cual contiene libros y miembros.

#### Atributos:

- `name`: Nombre de la biblioteca.
- `books`: Lista de libros en la biblioteca.
- `members`: Lista de miembros registrados en la biblioteca.

#### Métodos:

- `addBook(book)`: Añade un libro al catálogo de la biblioteca.
- `addMember(member)`: Registra a un nuevo miembro en la biblioteca.
- `findBookByTitle(title)`: Busca un libro en la biblioteca por título.
- `listAvailableBooks()`: Lista todos los libros disponibles en la biblioteca.
- `listMembers()`: Lista todos los miembros registrados en la biblioteca.

## Ejemplo de uso

git clone https://github.com/jtrujillo1/PRUEBA-T-CNICA-SOFTWARE-DEVELOPER-MID.git
cd PRUEBA-T-CNICA-SOFTWARE-DEVELOPER-MID
node class/prueba.js


## Funcionalidades futuras
Algunas funcionalidades adicionales que se podrían añadir a este sistema en futuras versiones incluyen:

- Gestión de fechas de préstamo y devolución: Controlar el tiempo que un libro ha sido prestado y generar alertas para los plazos de devolución.
- Registro de multas: Implementar un sistema de multas para miembros que no devuelvan los libros a tiempo.
- Gestión de otros ítems: Extender el sistema para gestionar otros ítems además de libros, como revistas, DVDs, etc.
- Notificaciones: Enviar recordatorios automáticos para las devoluciones pendientes de libros.


## Autor
Este sistema fue desarrollado por John Elias Trujillo Figueroa como parte de una prueba técnica para un sistema de gestión de bibliotecas sencillo, la funcion twoSum y un esquema de bases de datos relacional para blogs.