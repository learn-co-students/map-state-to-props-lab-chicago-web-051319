import React, { Component } from 'react';
import { connect } from 'react-redux'

class Users extends Component {

  displayUsers = () => {
    return this.props.users.map((user)=>{
      return <li>{`${user.username} ${user.hometown}`}</li>
    })
  }

  render() {
    return (
      <div>
        <ul>
          <p>Total Users: {this.props.userCount}</p>
          {this.displayUsers()}
        </ul>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  return {
    users: state.users,
    userCount: state.users.length
  }
}
export default connect(mapStateToProps)(Users)
