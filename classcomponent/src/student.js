import React, { Component } from "react";
import axios from 'axios'

import { Link } from "react-router-dom";
class Student extends Component
{
    
  constructor()
  {
    super()
    this.state={
        name:"",
        course:""
    }
  }
   addStudent=()=>{
    axios.post('http://localhost:3000/student',{name:this.state.name,course:this.state.course})
   }
    render()
    {
        return(
            <div>
                <h1>Student Data</h1>
                <Link to='/read'>View Student</Link>
                <Link to='/update'>Update Student</Link>
                <br/>
                <input placeholder="Name" onChange={e=>this.setState({name:e.target.value})}/>
                <br/>
                <input placeholder="Course" onChange={e=>this.setState({course:e.target.value})}/>
                
                <br/>
                <button onClick={this.addStudent}>AddStudent</button>
              
            </div>
        )
    }
}
export default Student