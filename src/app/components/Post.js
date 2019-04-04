import React from 'react';

class Post extends React.Component {
  render() {
    return (
        <article className="jumbotron">
            <h2>{this.props.title}</h2>
            <p>{this.props.postBody}</p>
        </article>
    );
    }
  }

export default Post;