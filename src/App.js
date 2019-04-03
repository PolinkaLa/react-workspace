import React from 'react';
import Menu from './Menu';
import Login from './Login';

class App extends React.Component {
  render() {
    const menuItems = [
      {href:'#', title: 'Home'},
      {href:'login.html', title: 'Sign in'},
    ];

    return <div>
      <h1>Welcome!</h1>
      <Menu items={menuItems} titleMenu="Navigation"/>
      <Login titleLogin="Login"/>
    </div>
  }
}
export default App;