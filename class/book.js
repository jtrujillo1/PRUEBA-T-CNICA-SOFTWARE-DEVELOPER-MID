export class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isCheckedOut = false;
    }

    checkOut() {
        if (!this.isCheckedOut) {
            this.isCheckedOut = true;
            return true;
        }
        return false;
    }

    returnBook() {
        if (this.isCheckedOut) {
            this.isCheckedOut = false;
            return true;
        }
        return false;
    }
}