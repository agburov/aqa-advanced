class Book {
    #title;
    #author;
    #year;

    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    get title() {
        return this.#title;
    }

    get author() {
        return this.#author;
    }

    get year() {
        return this.#year;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Title must be a non-empty string');
        }
        this.#title = value;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            throw new Error('Author must be a non-empty string');
        }
        this.#author = value;
    }

    set year(value) {
        const yearNum = Number(value);
        if (isNaN(yearNum) || yearNum < 0 || yearNum > new Date().getFullYear()) {
            throw new Error('Year must be a valid number');
        }
        this.#year = yearNum;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`);
    }

    static findOldestBook(books) {
        if (!Array.isArray(books) || books.length === 0) {
            throw new Error('A non-empty array of books must be provided');
        }

        return books.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        }, books[0]);
    }
}

export default Book;
