import React, { useState } from "react";
import Users from "./components/users";
import SearchStatus from "./components/searcStatus";
import api from "./api";

function App() {
  const [users, setUsers] = useState(api.users.fetchAll());
  const handleDelete = (userId) => {
    setUsers(users.filter((user) => user._id !== userId));
  };

  const handleTogglebookMark = (userId) => {
    const newUsers = [...users];
    const currentUser = newUsers.find((user) => userId === user._id);
    currentUser.status === true
      ? (currentUser.status = false)
      : (currentUser.status = true);
    setUsers(newUsers);
  };
  return (
    <div>
      <h2>
        <SearchStatus length={users.length} />
      </h2>
      <Users
        onTogglebookMark={handleTogglebookMark}
        onDelete={handleDelete}
        users={users}
      />
    </div>
  );
}

export default App;
