import React, { Component } from "react";
import DisplayContent from "./displayContent";

class Content extends Component
{
   
    //variable declaration
    constructor()
    {
           super() 
           console.log('constr in parent');
           this.state={
            data:"",
            msg:"welcome all"
           }
    }
    update=(childData)=>
    {
        
        this.setState({msg:childData})
    }

    // handleChange=(e)=>{
    //     console.log(e);
    //     this.setState({msg:e.target.value})
    // }

    componentDidMount()
    {
        console.log('CDM in Parent');
    }
        //view
    render()
    {
        // console.log('render in parent');
        return(
            <div>
                console.log('render in parent');
                <h1>Parent Component</h1>
                <h1>{this.state.msg}</h1>
                <input onChange={e=>this.setState({data:e.target.value})}/>
                <button onClick={this.update}>ChangeContent</button>
                <hr/>
                <DisplayContent msgContent={this.state.msg} updateParent={this.update}/>
            </div>
        )
    }
}
export default Content