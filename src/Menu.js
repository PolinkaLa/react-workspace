import React from 'react';
import MenuItem from './MenuItem';

class Menu extends React.Component {
  render() {
    const items = this.props.items.map((item, index) => {
      return <MenuItem key={index} href={item.href}>{item.title}</MenuItem>
    })
    
    return (
      <div>
        <h2>{this.props.titleMenu}</h2>
        <ul>
          {items}
        </ul>
      </div>
    );
  }
}

export default Menu;