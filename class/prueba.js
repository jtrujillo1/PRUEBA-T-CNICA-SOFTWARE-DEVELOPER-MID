import { Library } from "../class/library.js";
import { Book } from "../class/book.js";
import { Member } from "./member.js";

// Crear una biblioteca
const myLibrary = new Library("Biblioteca Central");

// Crear algunos libros
const book1 = new Book(1, "La melancolia de los feos", "Mario Mendoza", 3);
const book2 = new Book(2, "Cien Años de Soledad", "Gabriel García Márquez", 2);

// Agregar libros a la biblioteca
myLibrary.addBook(book1);
myLibrary.addBook(book2);

// Crear un miembro
const member1 = new Member(1, "Juan Pérez");

// Registrar el miembro en la biblioteca
myLibrary.addMember(member1);

// Listar los libros disponibles
myLibrary.listAvailableBooks();

// El miembro toma prestado un libro
member1.borrow(book1);
member1.borrow(book2);

// Ver los libros que el miembro ha tomado prestados
member1.listBorrowedBooks();

// El miembro devuelve un libro
member1.return(book1);

// Listar los libros disponibles después del préstamo y devolución
myLibrary.listAvailableBooks();

// Listar los miembros registrados en la biblioteca
myLibrary.listMembers();
