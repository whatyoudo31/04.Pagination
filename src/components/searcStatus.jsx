import React from "react";
import PropTypes from "prop-types";

const SearchStatus = ({ length }) => {
    let phrase = "";
    if (length === 0) phrase = "Никто с тобой не тусанет :(";
    if (length > 4) phrase = `${length} человек тусанут с тобой сегодня`;
    if (length < 5 && length > 0) {
        phrase = `${length} человека тусанут с тобой сегодня`;
    }
    if (length === 1) phrase = `${length} человек тусанет с тобой сегодня`;

    return (
        <span className={length !== 0 ? "bg-primary" : "bg-danger"}>
            {phrase}
        </span>
    );
};
SearchStatus.propTypes = {
    length: PropTypes.number.isRequired
};
export default SearchStatus;
