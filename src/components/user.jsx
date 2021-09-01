import React from "react";
import Qualitie from "./qualitie";
import BookMark from "./bookmark";

const User = ({
  _id,
  profession,
  rate,
  completedMeetings,
  qualities,
  name,
  onDelete,
  onTogglebookMark,
  ...user
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
            <BookMark {...user} />
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

export default User;
