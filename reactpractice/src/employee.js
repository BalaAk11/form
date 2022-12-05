import React, { Component } from "react";
import axios from "axios";

class Employee extends Component{
    constructor(){
        super()
        this.state = {
            name:"",
            salary:"",
            place:"",
            emp: []
        }
    }

    getEmp = ()=>{
        axios.get("http://localhost:3000/employee").then(res=>this.setState({emp:res.data}))
    }
   
    addEmp = ()=>{
        axios.post("http://localhost:3000/employee",{"name":this.state.name,"salary":this.state.salary,"place":this.state.place})
        this.getEmp()
    }

    componentDidMount(){
        this.getEmp()
    }


    render(){
        return(
            <div>
                <table border="1px solid">
                    <tr><th>Name</th><th>Salary</th><th>Place</th></tr>
                    {
                        this.state.emp.map(
                            e=><tr key={e.id}><td>{e.name}</td> <td>{e.salary}</td><td>{e.place}</td></tr>
                         )
                    }
                </table>

                <input type="text" placeholder="enter name" onChange={u=>this.setState({name:u.target.value})}/>
                <input type="text" placeholder="enter salary" onChange={u=>this.setState({salary:u.target.value})}/>
                <input type="text" placeholder="enter place" onChange={u=>this.setState({place:u.target.value})}/><br></br>
                
                <button onClick={this.addEmp} >add employee</button>
            </div>
        )
    }
}
export default Employee