export class Book {
  constructor(id, title, author, availableCopies = 1) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.availableCopies = availableCopies;
  }

  // Método para comprobar si el libro está disponible
  isAvailable() {
    return this.availableCopies > 0;
  }

  // Método para reducir el número de copias disponibles al prestar un libro
  borrowBook() {
    if (this.isAvailable()) {
      this.availableCopies--;
      console.log(`El libro "${this.title}" ha sido prestado. Copias restantes: ${this.availableCopies}`);
    } else {
      console.log(`El libro "${this.title}" no está disponible.`);
    }
  }

  // Método para aumentar el número de copias disponibles al devolver un libro
  returnBook() {
    this.availableCopies++;
    console.log(`El libro "${this.title}" ha sido devuelto. Copias disponibles: ${this.availableCopies}`);
  }
}
