import React, { useEffect, useState } from "react";

const Hooks2=(props)=>{
    const [course,setCourse]=useState("")
    const [emp,setEmp]=useState({
        id:1,name:"Selva",salary:50000
    })
    useEffect(()=>{
        return(()=>{
            console.log('Component Hooks2 removed');
        })
    },[])

    
    return(
        <div className="hooks2">
            <h1>Hooks-Child</h1>
            <input onChange={e=>setCourse(e.target.value)}/>
            <button onClick={()=>props.updateParent(course)}>UpdateParent</button>
            <hr/>
            <h1>Employee Name {emp.name}</h1>
            <h1>Employee Salary:{emp.salary}</h1>

            <input placeholder="Enter Salary" onChange={e=>setEmp(prev=>{return {...prev,salary:e.target.value}})}/>
        </div>
    )
}

export default Hooks2