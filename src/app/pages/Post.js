import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PostView from '../components/Post';

const Post = props => {
  const [postState, setPostState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/posts/' + props.params.postId)
      .then(response => {
        const result = response.data;
        setPostState(result)
      }).catch(error => {
        console.log(error)
      });
  })


  return (
    <div>
      {postState && <PostView {...postState} />}
    </div>
  );
}
export default Post