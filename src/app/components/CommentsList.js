import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './Comment';

const CommentsList = props => {

  const [commentsState, setCommentsState] = useState([]);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments/')
      .then(response => {
        const result = response.data;
        setCommentsState(result)
      }).catch(error => {
        console.log(error)
      });
  })

  if (!commentsState.length) {
    return null;
  }

  const comments = commentsState.map((comment, index) => {
    return <Comment key={index} {...comment} />
  })

  return (
    <>
      <h1>Комментарии</h1>
      {comments}
    </>
  );
}

export default CommentsList