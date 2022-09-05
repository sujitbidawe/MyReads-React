const OptionDropdown = ({ bookReadCategory, onChangeShelf }) => {

    const changeShelf = (newShelf) => {
        if (onChangeShelf) {
            onChangeShelf(newShelf)
        }

    }

    return (
        <div className="book-shelf-changer">
            <select value={bookReadCategory === undefined ? 'none' : bookReadCategory} onChange={(event) => { changeShelf(event.target.value) }}>
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