const OptionDropdown = ({ bookReadCategory }) => {

    return (
        <div className="book-shelf-changer">
            <select value={bookReadCategory === undefined ?  'none' : bookReadCategory } onChange={() => {}}>
                <option value="move" disabled>
                    Move to...
                </option>
                <option value="currentlyReading">
                    Currently Reading
                </option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>
        </div>
    )
}

export default OptionDropdown;