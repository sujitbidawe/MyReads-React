import OptionDropdown from "./OptionDropdown";
import * as BooksAPI from '../BooksAPI';
import { PropTypes } from 'prop-types';

const Book = ({ book, onUpdateLocalBook }) => {

    const updateShelf = (newShelf) => {
        const updateBookDetails = async () => {
            await BooksAPI.update(book, newShelf);
            onUpdateLocalBook(book, newShelf);
        }

        updateBookDetails();
    }

    return (
        <li >
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage:
                                `url("${book && book.imageLinks && book.imageLinks.thumbnail}")`
                        }}
                    ></div>
                    <OptionDropdown bookReadCategory={book.shelf === undefined ? 'none' : book.shelf} onChangeShelf={(newShelf) => updateShelf(newShelf)} />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(", ")}</div>
            </div>
        </li>
    )
}

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateLocalBook: PropTypes.func.isRequired
}

export default Book;