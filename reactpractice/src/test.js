import React,{useState} from "react";
const Test=()=>{
    const [name,setName]=useState("Abi")
    const [course,setCourse]=useState("React")

    const update=()=>{
        setCourse("ReactNative")
    }
    return(
        <div>
            <h1>Test Component</h1>
                <hr/>
                <h1>Name:{name}</h1>
                <h1>Course:{course}</h1>
                <button onClick={update}>update</button>
            
        </div>
    )
}
export default Test