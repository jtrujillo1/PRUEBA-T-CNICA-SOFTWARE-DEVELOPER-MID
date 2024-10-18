export class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
    this.members = [];
  }

  // Método para añadir un libro a la biblioteca
  addBook(book) {
    this.books.push(book);
    console.log(`El libro "${book.title}" ha sido añadido a la biblioteca.`);
  }

  // Método para registrar a un miembro en la biblioteca
  addMember(member) {
    this.members.push(member);
    console.log(
      `El miembro "${member.name}" ha sido registrado en la biblioteca.`
    );
  }

  // Método para encontrar un libro por título
  findBookByTitle(title) {
    return this.books.find(
      (book) => book.title.toLowerCase() === title.toLowerCase()
    );
  }

  // Método para listar todos los libros disponibles en la biblioteca
  listAvailableBooks() {
    console.log(`Libros disponibles en la biblioteca "${this.name}":`);
    this.books.forEach((book) => {
      console.log(
        `- ${book.title} de ${book.author} (Copias disponibles: ${book.availableCopies})`
      );
    });
  }

  // Método para listar los miembros registrados
  listMembers() {
    console.log(`Miembros registrados en la biblioteca "${this.name}":`);
    this.members.forEach((member) => {
      console.log(`- ${member.name}`);
    });
  }
}
