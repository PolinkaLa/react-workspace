import React from 'react';

class MenuItem extends React.Component {
  render() {
    return (
      <li className="nav-item"><a className="nav-link" href={this.props.href}>{this.props.children}</a></li>
    );
  }
}

MenuItem.defaultProps = {
  children: 'Home',
  href: '#'
}

export default MenuItem;