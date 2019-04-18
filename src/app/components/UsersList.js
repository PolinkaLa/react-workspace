import React, { useState, useEffect } from 'react';
import axios from 'axios';
import User from './User';

const UsersList = props => {

  const [usersState, setUsersState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users/')
      .then(response => {
        const result = response.data;
        setUsersState(result)
      }).catch(error => {
        console.log(error)
      });
  })

  if (!usersState.length) {
    return null;
  }

  const users = usersState.map((user, index) => {
    return <User key={index} {...user} />
  })

  return (
    <>
      <h1>Пользователи</h1>
      {users}
    </>
  );
}

export default UsersList