import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';

const PostsList = props => {
  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/')
      .then(response => {
        const result = response.data;
        setPostsState(result)
      }).catch(error => {
        console.log(error)
      });
  }, [])
  if (!postsState.length) {
    return null;
  }

  const posts = postsState.map((post, index) => {
    return <Post key={index} {...post} />
  })

  return (
    <>
      <h1>Посты</h1>
      {posts}
    </>
  );
}

export default PostsList
