import React from 'react';
import {connect} from 'react-redux';
import {fetchUser} from '../actions/userActions';
import {Link} from 'react-router';


class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUser(this.props.userId));
  }

  render() {
    const {user} = this.props;
    return (
      <>
        <div key={user.id}>
          <div>
            <Link to={`/users/${user.id}`}>{user.username}</Link>
          </div>
          <div>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <p>{user.website}</p>
          </div>
        </div>
      </>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user.user,
    userFetched: state.user.fetched
  };
}

export default connect(mapStateToProps)(User);