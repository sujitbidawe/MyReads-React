import Book from "./Book";
import { PropTypes } from 'prop-types';

const Shelf = ({ shelf, books, updateBook }) => {

    const filteredBooks = books.filter((book) => {
        return book.shelf === shelf.value;
    })

    return (
        <div className="bookshelf" >
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {
                        filteredBooks.map((book) => {
                            return (
                                <Book key={book.id} book={book} onUpdateLocalBook={(book, newShelf) => updateBook(book, newShelf)} />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

Shelf.propTypes = {
    shelf: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    updateBook: PropTypes.func.isRequired
}

export default Shelf;