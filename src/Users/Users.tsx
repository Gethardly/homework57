import React from 'react';
import {UserType} from "../types";
import User from "./User";

interface Props {
  users: UserType[];
}

const Users: React.FC<Props> = ({users}) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user}/>
      ))}
    </div>
  );
};

export default Users;