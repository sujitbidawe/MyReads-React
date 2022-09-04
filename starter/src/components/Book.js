import OptionDropdown from "./OptionDropdown";

const Book = ({ book }) => {
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
                    <OptionDropdown bookReadCategory={book.shelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </div>
        </li>
    )
}

export default Book;