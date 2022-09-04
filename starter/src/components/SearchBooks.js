import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import * as BooksAPI from '../BooksAPI';

const SearchBooks = () => {

    const [searchedBooks, setSearchedBooks] = useState([]);
    const [query, setQuery] = useState('');

    useEffect(() => {
        const getBooks = async () => {
            if (query.trim().length) {
                const res = await BooksAPI.search(query, 100);
                res.length ? setSearchedBooks(res) : setSearchedBooks([]);
            } else {
                setSearchedBooks([]);
            }
        }

        getBooks();
    }, [query]);

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
                                <li key={book.id}>
                                    <div className="book">
                                        <div className="book-top">
                                            <div
                                                className="book-cover"
                                                style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage:
                                                        `url("${book.imageLinks.thumbnail}")`
                                                }}
                                            ></div>
                                            {/* <div className="book-shelf-changer">
                                                            <select>
                                                                <option value="none" disabled>
                                                                    Move to...
                                                                </option>
                                                                <option value="currentlyReading">
                                                                    Currently Reading
                                                                </option>
                                                                <option value="wantToRead">Want to Read</option>
                                                                <option value="read">Read</option>
                                                                <option value="none">None</option>
                                                            </select>
                                                        </div> */}
                                        </div>
                                        <div className="book-title">{book.title}</div>
                                        <div className="book-authors">{book.author}</div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default SearchBooks;