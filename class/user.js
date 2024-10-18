export class User {
    constructor(name, userId) {
        this.name = name;
        this.userId = userId;
        this.checkedOutBooks = [];
    }

    checkOutBook(book) {
        if (book.checkOut()) {
            this.checkedOutBooks.push(book);
            return true;
        }
        return false;
    }

    returnBook(book) {
        const index = this.checkedOutBooks.indexOf(book);
        if (index !== -1 && book.returnBook()) {
            this.checkedOutBooks.splice(index, 1);
            return true;
        }
        return false;
    }
}