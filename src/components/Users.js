import React, { Component } from 'react';
import { connect } from 'react-redux';

class Users extends Component {

  allUsers = () => {
    return this.props.users.map(user => {
      return <li>{user.username}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.allUsers()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length }
}

export default connect(mapStateToProps)(Users)
