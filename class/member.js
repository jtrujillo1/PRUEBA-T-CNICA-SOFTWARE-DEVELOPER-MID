export class Member {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }

  // Método para que el miembro tome prestado un libro
  borrow(book) {
    if (book.isAvailable()) {
      book.borrowBook();
      this.borrowedBooks.push(book);
      console.log(`${this.name} ha tomado prestado el libro "${book.title}".`);
    } else {
      console.log(`El libro "${book.title}" no está disponible para préstamo.`);
    }
  }

  // Método para que el miembro devuelva un libro
  return(book) {
    const index = this.borrowedBooks.indexOf(book);
    if (index !== -1) {
      book.returnBook();
      this.borrowedBooks.splice(index, 1);
      console.log(`${this.name} ha devuelto el libro "${book.title}".`);
    } else {
      console.log(`${this.name} no tiene el libro "${book.title}".`);
    }
  }

  // Método para ver los libros prestados por el miembro
  listBorrowedBooks() {
    if (this.borrowedBooks.length === 0) {
      console.log(`${this.name} no tiene libros prestados.`);
    } else {
      console.log(`Libros prestados por ${this.name}:`);
      this.borrowedBooks.forEach(book => {
        console.log(`- ${book.title} de ${book.author}`);
      });
    }
  }
}
