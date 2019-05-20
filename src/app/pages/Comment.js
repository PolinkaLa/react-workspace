import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CommentView from '../components/Comment';

const Comment = props => {
  const [commentState, setCommentState] = useState(null);

  useEffect(() => {
    axios.get('http://jsonplaceholder.typicode.com/comments/' + props.params.commentId)
      .then(response => {
        const result = response.data;
        setCommentState(result)
      }).catch(error => {
        console.log(error)
      });
  })

  return (
    <div>
      {commentState && <CommentView {...commentState} />}
    </div>
  );

}
export default Comment 
