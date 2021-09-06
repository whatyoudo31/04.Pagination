import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";
import PropTypes from "prop-types";

const User = ({
    _id,
    profession,
    rate,
    completedMeetings,
    qualities,
    name,
    onDelete,
    onTogglebookMark,
    status
}) => {
    return (
        <tbody>
            <tr key={_id}>
                <td>{name}</td>
                <td>
                    {qualities.map((qualitie) => (
                        <Qualitie
                            key={qualitie._id}
                            color={qualitie.color}
                            name={qualitie.name}
                        />
                    ))}
                </td>
                <td>{profession.name}</td>
                <td>{completedMeetings}</td>
                <td>{rate}</td>
                <td>
                    <button className="" onClick={() => onTogglebookMark(_id)}>
                        <BookMark status={status} />
                    </button>
                </td>
                <td>
                    <button
                        className="btn btn-primary bg-danger"
                        onClick={() => onDelete(_id)}
                    >
                        Удалить
                    </button>
                </td>
            </tr>
        </tbody>
    );
};
User.propTypes = {
    _id: PropTypes.string.isRequired,
    profession: PropTypes.object.isRequired,
    rate: PropTypes.number.isRequired,
    completedMeetings: PropTypes.number.isRequired,
    qualities: PropTypes.array.isRequired,
    name: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
    onTogglebookMark: PropTypes.func.isRequired,
    status: PropTypes.bool.isRequired
};
export default User;
