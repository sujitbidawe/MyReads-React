import Book from "./Book";

const Shelf = ({ shelf, books }) => {

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
                                <Book key={book.id} book={book} />
                            )
                        })
                    }
                </ol>
            </div>
        </div>
    )
}

export default Shelf;