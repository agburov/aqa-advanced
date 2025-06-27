import Book from './Book.js';

class EBook extends Book {
    #format;

    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    get format() {
        return this.#format;
    }

    set format(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('File format must be a non-empty string');
        }
        this.#format = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Format: ${this.format}`);
    }

    static fromBook(book, format) {
        if (!(book instanceof Book)) {
            throw new Error('First argument must be an instance of Book class');
        }

        if (typeof format !== 'string' || format.trim() === '') {
            throw new Error('File format must be a non-empty string');
        }

        return new EBook(book.title, book.author, book.year, format);
    }
}

export default EBook;
