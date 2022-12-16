import React, { useState,useRef, useEffect } from "react";
import CompC from "./compC";

function CompB()
{
    // const course="react";
    
    const [course,setCourse]=useState("React")
    const [count,setCount]=useState(0)

    const inp=useRef()

    const updateCouse=()=>{
        console.log(inp.current);
        setCourse(inp.current.value)
    }
 useEffect(()=>setCount(count+1),[])//after first render it will execute only once
useEffect(()=>{setCount(count+1)},[course])//after every render when updating course 
    return(
        <div>
            <h1>CompB</h1>

        <h2>I have rendered {count} times</h2>
            <h2>Course Name:{course}</h2> 
            {/* <input type="text" placeholder="Enter course" onChange={e=>setCourse(e.target.value)}/> */}

            <input type="text" placeholder="Enter course" ref={inp}/>
            <button onClick={updateCouse}>submit</button>
           
        </div>
    )
}
export default CompB