import React from "react";
import LifecycleB from "./LifecycleB.js";

class LifecycleA extends React.Component{

    constructor(){
        super()
        this.state = {
            name:"Bala"
        }
        console.log("lfA constructor");
    }
    static getDerivedStateFromProps(props,state){
         console.log("LfA gdsfp");
         return null
            
           
    }
    componentDidMount(){
        console.log("LFA cdm");
    }
    shouldComponentUpdate(){
        console.log("lfa shouldcompupd")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lfa getsnapshotbeforeupdate");
        return null
    }
    componentDidUpdate(){
        console.log("lfa compdidupdate");
    }
    changeState = ()=>{
        this.setState({
            name:"ak"
        })
    }
    render(){
        console.log("render");
        return(
            <div>
                <h1>lfa</h1>
                {this.state.name}
                <button onClick={this.changeState}>change state</button>
                <LifecycleB/>
            </div>
        )  
    
    }
}
export default LifecycleA;