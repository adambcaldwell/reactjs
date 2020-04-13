import React from 'react';
import useResources from './use-resources';

/**
 * @component functional
 * @name UserList
 * @description
 * @author adam.caldwell
 */
const UserList = () => {
  const users = useResources('users');

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  );
};

export default UserList;
