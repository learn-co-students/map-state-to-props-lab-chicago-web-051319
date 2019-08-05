import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {
  displayUsers = () => {
    return this.props.users.map( (user) => {
      return <li>{user.username}</li>
    })
  }
  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  debugger;
  return { users: state.users, 
    userCount: state.users.length}
}
export default connect(mapStateToProps)(Users)
