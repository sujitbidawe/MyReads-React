import "./App.css";
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import SearchBooks from "./components/SearchBooks";
import Shelves from "./components/Shelves";
import * as BooksAPI from './BooksAPI';

function App() {

	const [allBooks, setBooks] = useState([]);

	useEffect(() => {
		const getBooks = async () => {
			const res = await BooksAPI.getAll();
			setBooks(res);
		}

		getBooks();
	}, []);

	const updateBook = (book, newShelf) => {
		const updateLocalBook = () => {
			const idx = allBooks.findIndex((shelfBook) => {
				return shelfBook.id === book.id;
			})

			if (idx >= 0) {
				let tempBooks = [...allBooks];
				tempBooks[idx].shelf = newShelf;
				setBooks(tempBooks);
			}
		}

		updateLocalBook();
	}

	return (
		<Routes>
			<Route exact path="/" element={
				<Shelves books={allBooks} onUpdateBook={(book, newShelf) => updateBook(book, newShelf)} />
			}
			/>
			<Route exact path='/search' element={
				<SearchBooks shelfBooks={allBooks} updateBook={(book, newShelf) => updateBook(book, newShelf)} />
			}
			/>
		</Routes>
	)
}

export default App;
