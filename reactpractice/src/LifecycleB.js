import React from "react";

class LifecycleB extends React.Component{
    constructor(){
        super()
        this.state = {
            name:"Bala"
        }
        console.log("lfb constructor");
    }
    static getDerivedStateFromProps(props,state){
         console.log("Lfb gdsfp");
         return null
             
             
    }
    componentDidMount(){
        console.log("LFb cdm");
    }
    shouldComponentUpdate(){
        console.log("lfb shouldcompupd")
        return true;
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("lfa getsnapshotbeforeupdate");
        return null
    }
    componentDidUpdate(){
        console.log("lfb compdidupdate");
    }
    render(){
        console.log("render");
        return(
            <div>
                <h1>bbb</h1>
               
            </div>
        )  
    
    }
}
export default LifecycleB