import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserProfile from '../components/User';

const User = props => {

  const [userState, setUserState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/users/' + props.params.userId)
      .then(response => {
        const result = response.data;
        setUserState(result)
      }).catch(error => {
        console.log(error)
      });
  })


  return (
    <div>
      {userState && <UserProfile {...userState} />}
    </div>
  );
}

export default User 