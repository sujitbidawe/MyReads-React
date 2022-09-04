import "./App.css";
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBooks from "./components/SearchBooks";
import DisplayBooks from "./components/DisplayBooks";
import * as BooksAPI from './BooksAPI';

function App() {

  const [allBooks, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    }

    getBooks();
  }, [] );

  return (
    <Routes>
      <Route exact path="/" element={
        <DisplayBooks books={allBooks} />
      }
      />
      <Route exact path='/add' element={
        <SearchBooks />
      }
      />
    </Routes>
  )
}

export default App;
