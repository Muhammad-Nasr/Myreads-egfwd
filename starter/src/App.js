import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import * as api from "./BooksAPI";

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getAll = async () => {
      const data = await api.getAll();
      if (data) {
        setBooks(data);
      }
    };
    getAll();
  }, []);

  const updateBookShelf = async (id, shelf) => {
    const data = await api.get(id);
    if (data) {
      const update = await api.update(data, shelf);
      const updatedData = await api.getAll();
      setBooks(updatedData);
    }
  };

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={<Home updateBookShelf={updateBookShelf} books={books} />}
        />
        <Route
          path="/search"
          element={
            <Search updateBookShelf={updateBookShelf} allBooks={books} />
          }
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
}

export default App;
