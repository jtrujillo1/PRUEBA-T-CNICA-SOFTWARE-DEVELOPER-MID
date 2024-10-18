export class Library {
  constructor() {
    this.books = [];
    this.users = [];
  }

  addBook(book) {
    this.books.push(book);
  }

  addUser(user) {
    this.users.push(user);
  }
}
