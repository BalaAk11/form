import React, { Component } from 'react'

 class Toggle extends Component {
    constructor()
    {
        super()
        this.state={
            isToggleOn:true,
            count:0
        }
       
    }

    handleClick()
    {
        // this.setState({isToggleOn:!this.state.isToggleOn})
        console.log('inside handleclick ',this);
    }

    increment=()=>{
      this.setState({count:this.state.count+1})
      console.log(this);
    }

    decrement=()=>{
      this.setState({count:this.state.count-1})

    }
  render() {
    return (
      <div>

        <button onClick={this.handleClick}>{this.state.isToggleOn?"ON":"oFF"}</button>
        <br/><br/>
        <button onClick={this.increment}>+</button>
        {this.state.count}
        <button onClick={this.decrement}>-</button>
      </div>
    )
  }
}
export default Toggle