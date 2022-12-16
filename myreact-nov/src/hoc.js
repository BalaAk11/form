import React,{useState} from "react";

const Hoc=(Oc)=>
{
    const EnhancedComponent=()=>{
        const [counter,setCounter]=useState(0)

    const increment=()=>{
        setCounter(counter+1)
    }

    const decrement=()=>{
        setCounter(counter-1)
    }
    return <Oc counter={counter} increment={increment} decrement={decrement}/>
        
    
    }

    return EnhancedComponent
    
}

export default Hoc