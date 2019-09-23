import React, { Component } from 'react';
//import { connect } from 'tls';
import { connect } from 'react-redux'

class Users extends Component {

  renderUsers = () =>{
    console.log(this.props)
    let index = 1;
    return this.props.users.map(user =>{
      index++;
      return <li key={index}>{user.username}</li>
    })
  }
  render() {
    return (
      <div>
        <ul>
          Users!
          {this.renderUsers()}
        </ul>
        <p>{this.props.users.length}</p>
      </div>
    )
  }
}

//add mapStateToProps here
const mapStateToProps = (state) =>{
  //debugger;
  return {users: state.users}
}
export default connect(mapStateToProps)(Users)
