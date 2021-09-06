import React from "react";
import PropTypes from "prop-types";

const Qualitie = ({ color, name }) => {
    return (
        <div style={{ margin: "5px" }} className={"badge bg-" + color}>
            {name}
        </div>
    );
};
Qualitie.propTypes = {
    color: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
};
export default Qualitie;
