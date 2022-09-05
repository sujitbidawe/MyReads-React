import { Link } from 'react-router-dom';
import Shelf from './Shelf';

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
            <Link to='/add' className="open-search">
                Add a book
            </Link>
        </div>
    )
}

export default Shelves;