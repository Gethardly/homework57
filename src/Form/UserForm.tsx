import React, {useState} from 'react';
import './UserForm.css';
import {UserType, UserTypeMutation} from "../types";

interface FormProps {
  onSubmit: (user: UserType) => void;
}

const UserForm: React.FC<FormProps> = ({onSubmit}) => {
  const [user, setUser] = useState<UserTypeMutation>({
    name: '',
    email: '',
    active: false,
    role: '',
  });

  const onFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;

    setUser(prev => ({...prev, [name]: value}));
  };

  const onFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      id: Math.random().toString(),
      ...user,
    })
  };

  return (
    <>
      <form className="mt-2 ms-2 mainForm" onSubmit={onFormSubmit}>

        <div className="form-group">
          <input
            required
            name="name"
            value={user.name}
            type="text"
            placeholder="Name"
            className="form-control"
            onChange={onFormChange}
          />
        </div>

        <div className="form-group">
          <input
            required
            name="email"
            value={user.email}
            type="email"
            placeholder="E-mail"
            className="form-control"
            onChange={onFormChange}
          />
        </div>

        <div className="form-group">
          <label className="me-2">Active:</label>
          <input
            type="checkbox"
            name="active"
            onChange={(e) => {
              setUser(prev => ({...prev, active: e.target.checked}));
            }}
          />
        </div>

        <div className="form-group">
          <select
            required
            name="role"
            value={user.role}
            onChange={onFormChange}
          >
            <option value=''>Select a role</option>
            <option>user</option>
            <option>editor</option>
            <option>admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add new user</button>
      </form>
    </>
  );
};

export default UserForm;