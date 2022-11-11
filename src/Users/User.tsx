import React from 'react';
import {UserType} from "../types";

interface Props {
  user: UserType;
}

const User: React.FC<Props> = ({user}) => {
  let active: string;

  if (!user.active) {
    active = 'Non active'
  } else {
    active = 'Active'
  }

  return (
    <>
      <div className="card me-2 mt-2 pt-3 ps-3">
          <div className="card-body">
            <h5 className="card-title">Name: {user.name}</h5>
            <p className="card-text"><b>E-mail:</b> {user.email}</p>
            <p className="card-text"><b>Role:</b> {user.role}</p>
            <p className="card-text"><b>Account:</b> {active}</p>
          </div>
      </div>
    </>
  );
};

export default User;