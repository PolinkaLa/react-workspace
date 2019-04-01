    
import React from 'react';

class Login extends React.Component {
  render() {
    return (
        <form name='loginForm'>
            <input name='name' type='text'/>
            <br/>
            <input name='password' type='password'/>
            <br/>
            <input name='submit' type='submit' value='login'/>
        </form>
    );
  }
}

export default Login;