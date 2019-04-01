import React, {Component} from 'react';
import Developer from './Developer'

import './style.css';

class App extends Component {
  render() {
    const developer = new Developer();
    console.log(developer.name);
    return (
      <div>
        <h1>Hello React!</h1>
        <p>{developer.name}</p>
        <p>{developer.language}</p>
      </div>
    );
  }
}

export default App;
