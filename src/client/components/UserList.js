import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions/index';

const renderUser = user => <li key={user.id}>{user.name}</li>;

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return <ul>{this.props.users.map(renderUser)}</ul>;
  }

  render() {
    return (
      <div>
        <h2>Here's a list of users</h2>
        {this.renderUsers()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users };
}

export default connect(mapStateToProps, { fetchUsers })(UserList);
