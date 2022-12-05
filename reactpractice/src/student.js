import axios from "axios";
import React, { Component } from "react";

class Student extends Component{
    constructor(){
        super()
        this.state={

            boys:[]
        }
    }
    componentDidMount(){
       axios.get("http://localhost:3000/student").then(res=>this.setState({boys:res.data}))
    }
    render(){
       return(
        <div>
            <h1>FRIENDS</h1>
            <table border="2px solid black">
                <thead>
                    <tr><th>ID</th><th>NAME</th><th>IDENTITY</th></tr>
                </thead>
                <tbody>
                    {
                        this.state.boys.map(b=>
                            <tr key={b.id}><td>{b.id}</td><td>{b.name}</td><td>{b.identity}</td></tr>
                        )
                    }
                </tbody>
            </table>

        </div>
       )
    }
}
export default Student