import Book from "./Book";

const BookShelf = ({ title, books, updateBookShelf, setUpdate }) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map((book) => (
            <Book
              key={book.id}
              book={book}
              updateBookShelf={updateBookShelf}
              setUpdate={setUpdate}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default BookShelf;
