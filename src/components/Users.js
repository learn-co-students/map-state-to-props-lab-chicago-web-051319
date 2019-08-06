import React, { Component } from 'react';
import { connect } from 'react-redux'
class Users extends Component {

  render() {

    const users = this.props.users
    return (
      <div>
        <ul>
          {users.map(user => {
            return <li>{user.username}</li>
          })}
        </ul>
          {users.length}
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {users: state.users}
}

export default connect(mapStateToProps)(Users)
