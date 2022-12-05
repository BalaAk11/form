import React, { Component } from 'react'
import Two from './two';

 class One extends Component {
    constructor()
    {
        super()
        this.state={course:"React",isToggle:true}
        console.log('constr in parent-One');
    }
    static getDerivedStateFromProps(props,state)
    {
        console.log('getDerivedStateFromProps in Parent-One',props,state);
    }
    componentDidMount()
    {
        
        console.log('CDM in parent-One');
        setTimeout(()=>{
            this.setState({course:"Python"})
        },5000)

    }
    shouldComponentUpdate(nextProps,nextState) {
        if(nextState.course=="Python")
        {
            
            return true;
        }
        else
        {
            return false;
        }
        
      }
    componentDidUpdate()
    {
        console.log('CDU in Parent-One');
    }
    toggleTwo=()=>{
        this.setState({isToggle:!this.state.isToggle})
    }

  render() {
    console.log('render in parent-One');

    return (
      <div>One
        <h1>Course:{this.state.course}</h1>
        <h2>isToggle:{this.state.isToggle}</h2>
        <button onClick={this.toggleTwo}>Toggle</button>
        <hr/>
        {this.state.isToggle?<Two course={this.state.course}/>:<></>}
      </div>
    )
  }
}
export default One