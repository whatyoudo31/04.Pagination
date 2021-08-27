import React, { useState } from "react";
import api from "../api/index";

const Usrs = () => {
  let [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };
  const renderPhrase = (number) => {
    let phrase = "";
    if (users.length === 0) phrase = "Никто с тобой не тусанет :(";
    if (users.length > 4)
      phrase = `${users.length} человек тусанут с тобой сегодня`;
    if (users.length < 5 && users.length > 0)
      phrase = `${users.length} человека тусанут с тобой сегодня`;
    if (users.length === 1)
      phrase = `${users.length} человек тусанет с тобой сегодня`;

    return (
      <span className={users.length !== 0 ? "bg-primary" : "bg-danger"}>
        {phrase}
      </span>
    );
  };

  const renderUsers = (array) => {
    return array.map((user) => (
      <tbody>
        <tr key={user._id}>
          <td>{user.name}</td>
          <td>
            {user.qualities.map((qualitie) => (
              <div
                style={{ margin: "5px" }}
                className={"badge bg-" + qualitie.color}
              >
                {qualitie.name}
              </div>
            ))}
          </td>
          <td>{user.profession.name}</td>
          <td>{user.completedMeetings}</td>
          <td>{user.rate}</td>
          <td>
            <button
              className="btn btn-primary bg-danger"
              onClick={() => handleDelete(user._id)}
            >
              Удалить
            </button>
          </td>
        </tr>
      </tbody>
    ));
  };

  return (
    <>
      <h2>{renderPhrase()}</h2>
      {users.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Имя</th>
              <th scope="col">Качества</th>
              <th scope="col">Профессия</th>
              <th scope="col">Встретился, раз</th>
              <th scope="col">Оценка</th>
              <th scope="col">Удаление</th>
            </tr>
          </thead>
          {renderUsers(users)}
        </table>
      )}
    </>
  );
};

export default Usrs;
