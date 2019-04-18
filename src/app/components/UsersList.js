import React from 'react';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions/usersActions';
import {Link} from 'react-router';
class UsersList extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchUsers())
  }

  render()
  {
    const {users} = this.props;
    console.log(users)
    if (!users.length) {
      return null;
    }
    const mappedUsers = users.map(user =>
      <div key={user.id}>
        <div>
          <Link to={`/users/${user.id}`}>{user.username}</Link>
        </div>
        <div >
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      </div>);

    return (
    <div>
      <h1>Пользователи</h1>
      {mappedUsers}
    </div>
  );
  }
}


function mapStateToProps(state) {
  return {
    users: state.users.users,
    usersFetched: state.users.fetched
  };
}

export default connect(mapStateToProps)(UsersList);
