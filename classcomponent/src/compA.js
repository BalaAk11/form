import React, { Component } from 'react'
import CompB from './compB'

 class CompA extends Component {

    constructor()
    {
        super()
        this.state={
            msgA:"Hello Friends",
            company:['TCS','CTS','HCL'],
            employee:{eid:1,ename:"Harish",salary:50000},
            emp:[{id:1,name:"Selva"},{id:2,name:"Gowtham"},{id:3,name:"Tamil"}]
        }
    }
    updateMsg=(data)=>{//passing data from comp-B
        this.setState({msgA:data})
    }
    updateSalary=()=>{
        // this.setState({employee:{...this.state.employee,salary:70000}})
        // this.setState({company:[...this.state.company[2]:"Zoho"]})
    }
  render() {
    return (
      <div>CompA
        <br/>
        {this.state.employee.salary}
        <br/>
        <h1>Employee Details</h1>
        
            <table border="1px">
                <thead>
                    <tr><th>EmployeeID</th><th>EmployeeName</th><th>Actions</th></tr>
                </thead>
                <tbody>
           {
             this.state.emp.map(e=><tr key={e.id}><td>{e.id}</td><td>{e.name}</td><td><button>Edit</button><button>Delete</button></td></tr>)
                   
           }
            </tbody>
            </table>
            <br/><button onClick={this.updateSalary}>updateEmployee</button>
        
        <hr/>
        <CompB msg1={this.state.msgA} update1={this.updateMsg} emp={this.state.emp}/>
      </div>
    )
  }
}
export default CompA