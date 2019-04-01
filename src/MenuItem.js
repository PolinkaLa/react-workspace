import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <li><a href={this.props.href}>{this.props.children}</a></li>
    );
  }
}

MenuItem.defaultProps = {
  children: 'Home',
  href: '#'
}

export default MenuItem;