import React, { Component } from 'react'
import axios from 'axios'
 class User extends Component {

    constructor()
    {
        
        super()
        this.state={
            User:[]
        }
    }
    addUser=()=>{
        axios.post('http://localhost:3000/user',{"uname":"Selva","city":"Madurai"})
    }
    componentDidMount()
    {
        axios.get('http://localhost:3000/user').then(res=>this.setState({User:res.data}))
        // fetch('http://localhost:3000/user').then(res=>console.log(res))
    }
  render() {
    return (
      <div>
        <ul>
        {
            this.state.User.map(
                u=><li id={u.id}>{u.uname}</li>
            )
        }

        </ul>
        <button onClick={this.addUser}>AddUser</button>
        </div>
    )
  }
}
export default User