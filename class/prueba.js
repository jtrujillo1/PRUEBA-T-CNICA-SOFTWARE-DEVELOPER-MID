import { Library } from "../class/library.js";
import { Book } from "../class/book.js";
import { User } from "./user.js";

const library = new Library();
const book1 = new Book("1984", "George Orwell", "123456789");
const user1 = new User("Alice", 1);

library.addBook(book1);
library.addUser(user1);
user1.checkOutBook(book1);

console.log(library);
