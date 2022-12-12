import React, { Component } from 'react'

 class Two extends Component {
    constructor()
    {
        super()
      
        console.log('constr in Child-Two');
        
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps in Child-Two',props,state);
    }
    componentDidMount()
    {
        console.log('CDM in Child-Two');

    }
    componentWillUnmount()
    {
        console.log('unMount is called in Two');
    }
  render() {
    console.log('render in Child-Two');

    return (
      <div>Two
        
        <h1>Course:{this.props.course}</h1>
      </div>
    )
  }
}
export default Two;