import React from 'react';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {show: false}
  }
  handleClick(){
    console.log(this.state.show)
    this.state.show ? this.setState({show: false}): this.setState({show: true});
  }
  render() {
    const {title, postBody, date, author} = this.props.item
    const isShow = this.state.show;
    if (isShow){
      return (
        <article className="jumbotron">
            <h2 onClick={this.handleClick}>{title} <i><span className="badge badge-info">hide</span></i></h2>
            <p>{postBody}</p>
            <p><i>Created </i><span className="badge badge-secondary">{date}</span></p>
            <p><i>Author </i><span className="badge badge-primary">{author}</span></p>
        </article>
    );
    }
    else{
      return (
        <article className="jumbotron">
            <h2 onClick={this.handleClick}>{title} <i><span className="badge badge-info">show</span></i></h2>
        </article>
    );
    }
    
    }
  }

export default Post;