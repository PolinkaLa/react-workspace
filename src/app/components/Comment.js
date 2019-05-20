import React from 'react';
import {Link} from 'react-router';

const Comment = props => {
  return(
    <div className="card border-secondary mb-3">
      <div className="card-header">
        <Link to={`/comments/${props.id}`}>
          {props.name}
        </Link>
      </div>
      <div className="card-body text-secondary">
          <p>{props.email}</p>
          <p>{props.body}</p>
        </div>
      </div>
    );
}
export default Comment 