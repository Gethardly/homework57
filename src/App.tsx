import React, {useState} from 'react';
import UserForm from "./Form/UserForm";
import {UserType} from "./types";
import Users from "./Users/Users";

function App() {
const [users, setUsers] = useState<UserType[]>([]);

const addUser = (newUser: UserType) => {
  setUsers(prev => [...prev, newUser]);
};
console.log(users);
  return (
    <div className="App mt-2 ms-2">
      <div className="row">
        <div className="col">
          <h3>Add new user</h3>
          <UserForm onSubmit={addUser}/>
        </div>
        <div className="col me-3">
          <h3>Users List</h3>
          <Users users={users}/>
        </div>
      </div>
    </div>
  );
}

export default App;
