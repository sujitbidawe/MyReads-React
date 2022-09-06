import { PropTypes } from 'prop-types';

const OptionDropdown = ({ bookReadCategory, onChangeShelf }) => {

    const changeShelf = (newShelf) => {
        if (onChangeShelf) {
            onChangeShelf(newShelf)
        }

    }

    return (
        <div className="book-shelf-changer">
            <select value={bookReadCategory} onChange={(event) => { changeShelf(event.target.value) }}>
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

OptionDropdown.propTypes = {
    bookReadCategory: PropTypes.string.isRequired,
    onChangeShelf: PropTypes.func.isRequired
}

export default OptionDropdown;