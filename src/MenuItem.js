import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <li class="nav-item"><a class="nav-link" href={this.props.href}>{this.props.children}</a></li>
    );
  }
}

MenuItem.defaultProps = {
  children: 'Home',
  href: '#'
}

export default MenuItem;