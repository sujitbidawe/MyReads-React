import { Link } from 'react-router-dom';
import Shelf from './Shelf';
import { PropTypes } from 'prop-types';

const Shelves = ({ books, onUpdateBook }) => {

    const shelves = [{ name: 'Currently Reading', value: 'currentlyReading' }, { name: 'Want To Read', value: 'wantToRead' }, { name: 'Read', value: 'read' }];

    return (

        <div className="list-books">
            <div className="list-books-title">
                <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                    {
                        shelves.map((shelf) => {
                            return (
                                <Shelf key={shelf.value} shelf={shelf} books={books} updateBook={(book, newShelf) => onUpdateBook(book, newShelf)} />
                            )
                        })
                    }
                </div>
            </div>
            <Link to='/search' className="open-search">
                Add a book
            </Link>
        </div>
    )
}

Shelves.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired
}

export default Shelves;