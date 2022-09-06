import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book";
import { DebounceInput } from 'react-debounce-input';

const SearchBooks = ({ shelfBooks, updateBook }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [query, setQuery] = useState('');

    const updateThisBook = (book, newShelf) => {
        const updateLocalBook = () => {
            const idx = searchedBooks.findIndex((searchedBook) => {
                return searchedBook.id === book.id;
            })

            if (idx >= 0) {
                let tempBooks = [...searchedBooks];
                tempBooks[idx].shelf = newShelf;
                updateBook(book, newShelf);
                setSearchedBooks(tempBooks);
            }
        }

        updateLocalBook();
    }

    useEffect(() => {
        const getBooks = async () => {
            if (query.trim().length) {
                const res = await BooksAPI.search(query, 100);
                if (res.length) {
                    res.forEach((book) => {
                        shelfBooks.forEach((shelfBook) => {
                            if (book.id === shelfBook.id) {
                                book['shelf'] = shelfBook.shelf;
                            }
                        })
                    });
                    setSearchedBooks(res);
                } else {
                    setSearchedBooks([]);
                }
            } else {
                setSearchedBooks([]);
            }
        }

        getBooks();
    }, [query, shelfBooks]);

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link className="close-search" to='/'>
                    Close
                </Link>
                <div className="search-books-input-wrapper">
                    <DebounceInput
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => { setQuery(event.target.value) }}
                        debounceTimeout={500}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        searchedBooks.map((book) => {
                            return (
                                <Book key={book.id} book={book} onUpdateLocalBook={(book, newShelf) => updateThisBook(book, newShelf)} />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;