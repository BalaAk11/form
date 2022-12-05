import React, { Component } from 'react'

class FileB extends Component {
    constructor(){
        super()
        this.state = {
            news2:""
        }
    }
   
  render() {
    return (
      <div>FileB
        {this.props.msg2}
        <input type="text" onChange={e=>this.setState({news2:e.target.value})}/>
        <button onClick={this.props.newMsg(this.state.news2)}>updatemsg</button>
      </div>
    )
  }
}
export default FileB;
