import React from "react";

const Book = ({ book, updateBookShelf }) => {
  // fucntion to handle search and update book shelf
  const handleSearch = (e) => {
    updateBookShelf(e.target.id, e.target.value);
    book.shelf = e.target.value;
    return e;
  };

  return (
    <>
      <li>
        <div className="book">
          <div className="book-top">
            <div
              className="book-cover"
              style={{
                width: 128,
                height: 193,
                backgroundImage: ` url(${book.imageLinks?.thumbnail})`,
              }}
            ></div>
            <div className="book-shelf-changer">
              <select
                onChange={handleSearch}
                id={book.id}
                value={book.shelf ? book.shelf : "none"}
              >
                <option disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">
            {book.authors?.length > 0 ? book.authors.join(" - ") : "unknown"}
          </div>
        </div>
      </li>
    </>
  );
};

export default Book;
