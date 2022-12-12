import React, { Component } from "react";
import {Link} from 'react-router-dom'
import axios from "axios";
class ListStudent extends Component
{
    constructor()
    {
        super()
        this.state={
            student:[],
           

        }
    }
    getStudent=()=>
    {
        axios.get('http://localhost:3000/student').then(res=>{
            this.setState({student:res.data})
            console.log(this.state.student);
        })
    }
    componentDidMount()
    {
        this.getStudent()
    }
    setData=(data)=>{
        console.log(data);
        localStorage.setItem('id',data.id)
        localStorage.setItem('name',data.name)
        localStorage.setItem('course',data.course)
    }

    onDelete=(id)=>{
        axios.delete(`http://localhost:3000/student/${id}`).then(()=> this.getStudent())
       
    }
    render()
    {
        return(
            <div>
                <table border='1px'>
                    <thead>
                        <tr><th>Name</th><th>Course</th><th>Actions</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.student.map(
                                s=>{
                                    return <tr key={s.id}><td>{s.name}</td><td>{s.course}</td><td><Link to='/update'><button onClick={()=>this.setData(s)}>Edit</button></Link><button onClick={()=>{this.onDelete(s.id)}}>Delete</button></td></tr>
                                }
                            )
                        }
                    </tbody>

                </table>
            </div>
        )
    }
}
export default ListStudent