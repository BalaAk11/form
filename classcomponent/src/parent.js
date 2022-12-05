import React from "react";
import Child from "./child";

class Parent extends React.Component{
    constructor(){
        super();
        this.state = {brand:"kwid"};
    }
    changeBrnd = (childData)=>{
        this.setState({brand:childData})
    }
    render(){
        return(
            <div>
                <h3>I have a {this.state.brand} car</h3>
                <Child updateBrand={this.changeBrnd}/>
            </div>
        )
    }
}
export default Parent;