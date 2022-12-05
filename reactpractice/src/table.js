import React, { Component } from 'react'

class Table extends Component {
  constructor(){
    super()
    this.state={
      emp:[{id:1,name:"Bala"},{id:2,name:"Prabhu"},{id:3,name:"Ashok"}]
    }
  }
  render() {
    return (
      <div>Employee 
        <table border="2px solid ">
          <thead>
            <tr><th>Id</th><th>Name</th></tr>
          </thead>
          <tbody className='tb'>
            {
              this.state.emp.map(e=><tr key={e.id}><td>{e.id}</td><td>{e.name}</td></tr>)
            }
          </tbody>
        </table>
        
      </div>
    )
  }
}
export default Table;