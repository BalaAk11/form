import React from "react";

class Garage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            brand:"kwid"
        }
       
    }
    changeBrand = ()=>{
       this.setState({brand:this.props.brand})
    }
    render(){
        return(
            <div>
                <h1>its brand name is {this.state.brand}</h1>
                <button onClick={this.changeBrand}>change brand</button>
            </div>
        )
    }
}
export default Garage;
