import React from "react";
import PropTypes from "prop-types";

const BookMark = ({ status, ...rest }) => {
    console.log(status);
    let fill = "";
    if (status === true) fill = "-fill";
    if (status === false) fill = "";

    return <i className={"bi bi-suit-heart" + fill}></i>;
};
BookMark.propTypes = {
    status: PropTypes.bool.isRequired
};
export default BookMark;
