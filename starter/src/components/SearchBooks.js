import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from '../BooksAPI';
import Book from "./Book";

const SearchBooks = ({ shelfBooks }) => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getBooks = async () => {
            if (query.trim().length) {
                const res = await BooksAPI.search(query, 100);
                if (res.length) {
                    res.forEach((book) => { 
                        shelfBooks.forEach((shelfBook) =>{
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
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        value={query}
                        onChange={(event) => { setQuery(event.target.value) }}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {
                        searchedBooks.map((book) => {
                            return (
                                <Book key={book.id} book={book} />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;