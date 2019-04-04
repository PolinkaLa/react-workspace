import React from 'react';
import Post from './Post';

class Blog extends React.Component {
  render() {
    const postsData = this.props.postsData.map((item, index) => {
        return <Post key={index} href={item.title}>{item.postBody}</Post>
      })
    return (
        <Fragment>
          {postsData}
        </Fragment>
    );
    }
  }

export default Blog;