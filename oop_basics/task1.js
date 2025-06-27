import Book from './Book.js';
import EBook from './EBook.js';

const book1 = new Book('War and Peace', 'Leo Tolstoy', 1869);
const book2 = new Book('Crime and Punishment', 'Fyodor Dostoevsky', 1866);
const book3 = new Book('The Master and Margarita', 'Mikhail Bulgakov', 1967);

console.log('Information about books:');
book1.printInfo();
book2.printInfo();
book3.printInfo();

const ebook1 = new EBook('1984', 'George Orwell', 1949, 'PDF');
const ebook2 = new EBook("Harry Potter and the Philosopher's Stone", 'J.K. Rowling', 1997, 'EPUB');

console.log('\nInformation about ebooks:');
ebook1.printInfo();
ebook2.printInfo();

console.log('\nChanging book properties:');
book1.author = 'L.N. Tolstoy';
book1.printInfo();

console.log('\nCreating ebook from book:');
const ebook3 = EBook.fromBook(book2, 'MOBI');
ebook3.printInfo();

const allBooks = [book1, book2, book3, ebook1, ebook2, ebook3];
const oldestBook = Book.findOldestBook(allBooks);
console.log('\nThe oldest book:');
oldestBook.printInfo();
