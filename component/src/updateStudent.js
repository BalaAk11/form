import React, { Component } from "react";
import axios from "axios";
import {Link} from 'react-router-dom'

class Update extends Component
{
    constructor()
    {
        super()
        this.state={
            name:"",
            course:"",
            id:""
        }
    }
    componentDidMount=()=>
    {
        this.setState({id:localStorage.getItem('id')})
        this.setState({name:localStorage.getItem('name')})
        this.setState({course:localStorage.getItem('course')})

    }
    updateStudent=()=>
    {
        axios.put(`http://localhost:3000/student/${this.state.id}`,{name:this.state.name,course:this.state.course})
    }
    render()
    {
        return(
            <div>
                <h1>Update Student</h1>
                <Link to='/read'>View Student</Link>
                <input placeholder="Name" value={this.state.name} onChange={e=>this.setState({name:e.target.value})}/>
                <br/>
                <input placeholder="Course" value={this.state.course} onChange={e=>this.setState({course:e.target.value})}/>
                
                <br/>
                <button onClick={this.updateStudent}>update</button>
            </div>
        )
    }
}
export default Update