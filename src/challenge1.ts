// challenge1.ts

// 1. Type untuk book
type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// 2. Array untuk menyimpan semua books (in-memory)
const books: Book[] = [];

/**
 * Menambahkan buku baru ke koleksi.
 */
function addBook(title: string, author: string, publicationYear: number): void {
  const newBook: Book = { title, author, publicationYear };
  books.push(newBook);

  console.log(`Book added: "${title}" by ${author} (${publicationYear})`);
}

/**
 * Menampilkan semua buku yang tersimpan.
 */
function listBooks(): void {
  console.log("All Books:");

  for (const book of books) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
}

/**
 * Mencari buku berdasarkan title.
 */
function searchBook(title?: string): void {
  if (!title) {
    console.log("Please provide a title to search.");
    return;
  }

  const results = books.filter((book) => book.title.includes(title));

  console.log(`Search Results for "${title}":`);

  if (results.length === 0) {
    console.log(`No books found with title containing "${title}".`);
    return;
  }

  for (const book of results) {
    console.log(`- ${book.title} by ${book.author} (${book.publicationYear})`);
  }
}

// Don't delete code bellow and this code must be at the bottom of the file
export { addBook, listBooks, searchBook };
