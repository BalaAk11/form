import React, { Component } from 'react'

 class CompB extends Component {
    constructor()
    {
        super()
        this.state={
            msgB:""
        }
    }
  render() {
    return (
      <div>
        CompB
        <br/>
        {this.props.msg1}
        <br/>
        <h1>Employee Name</h1>
        <ul>
            {
                this.props.emp.map(e=><li key={e.id}>{e.name}</li>)
            }
        </ul>
        <input type="text" onChange={e=>this.setState({msgB:e.target.value})}/>
        <button onClick={()=>this.props.update1(this.state.msgB)}>update-CompA</button>
        </div>
    )
  }
}
export default CompB