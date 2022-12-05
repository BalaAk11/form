import React, { Component } from 'react'

 class DisplayContent extends Component {

    componentDidMount()
    {
        console.log('CDM in Child');
    }
  render() {
    console.log('render in child');
    return (
      <div>
        <h1>Child Component</h1>
        <h2>{this.props.msgContent}</h2>
        <button onClick={()=>this.props.updateParent("Welcome React")}>updateParent</button>
      </div>
    )
  }
}
export default DisplayContent