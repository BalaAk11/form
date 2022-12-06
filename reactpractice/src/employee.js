import React, { Component } from "react";
import axios from "axios";

class Employee extends Component{
    constructor(){
        super()
        this.state = {
            id:0,
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
        axios.post("http://localhost:3000/employee",{"name":this.state.name,"salary":this.state.salary,"place":this.state.place}).then(()=>this.getEmp())
        
    }
   
    setData=(empdata)=>{
        this.setState({name:empdata.name})
        this.setState({salary:empdata.salary})
        this.setState({place:empdata.place})
        this.setState({id:empdata.id})
    }

    update=()=>
    {
        
        axios.put(`http://localhost:3000/employee/${this.state.id}`,{"name":this.state.name,"salary":this.state.salary,"place":this.state.place}).then(()=>this.getEmp())
    }

    componentDidMount(){
        this.getEmp()
    }

        onDelete=(id)=>{
            axios.delete(`http://localhost:3000/employee/${id}`).then(()=>this.getEmp())
        }

    render(){
        return(
            <div>
                 
                <table border="1px solid">
                    <tr><th>Name</th><th>Salary</th><th>Place</th><th>Action</th></tr>
                    {
                        this.state.emp.map(
                            e=><tr key={e.id}><td>{e.name}</td> <td>{e.salary}</td><td>{e.place}</td><td><button className="up" onClick={()=>this.setData(e)}>Update</button><button className="del" onClick={()=>this.onDelete(e.id)}>Delete</button></td></tr>
                         )
                    }
                </table>
                
                <input type="text" placeholder="enter name" onChange={u=>this.setState({name:u.target.value})} value={this.state.name}/>
                <input type="text" placeholder="enter salary" onChange={u=>this.setState({salary:u.target.value})} value={this.state.salary}/>
                <input type="text" placeholder="enter place" onChange={u=>this.setState({place:u.target.value})} value={this.state.place}/><br></br>
                
                <button className="btn1" onClick={this.addEmp} >add employee</button><br/><br/>
                <button className="btn2"onClick={this.update}>UpdateEmployee</button>   
                
            </div>
        )
    }
}
export default Employee