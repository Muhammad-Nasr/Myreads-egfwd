import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Book from "../components/Book";
import * as api from "../BooksAPI";

const Search = ({ updateBookShelf, allBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [books, setBooks] = useState([]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    let mounted = true;
    const search = async () => {
      const searchData = await api.search(searchTerm);
      if (searchData.error) {
        setBooks([]);
      } else {
        setBooks(searchData);
      }
    };
    if (searchTerm) {
      if (mounted) {
        search();
      }
    }
    return () => {
      mounted = false;
      setBooks([]);
    };
  }, [searchTerm]);

  books.forEach((book) => {
    allBooks.map((b) => {
      if (b.id === book.id) {
        book.shelf = b.shelf;
      }
    });
  });

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={searchTerm}
            onChange={handleSearch}
            type="text"
            placeholder="Search by title, author, or ISBN"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {books.length > 0 &&
            books.map((book) => (
              <Book
                key={book.id}
                book={book}
                updateBookShelf={updateBookShelf}
              />
            ))}
        </ol>
      </div>
    </div>
  );
};

export default Search;
