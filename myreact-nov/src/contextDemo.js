import React,{createContext, useState} from "react";
import CompA from "./compA";

export const employeeNameContext=createContext()
function ContextDemo()
{
    const [name,setName]=useState("Ashok")
    return(
        <employeeNameContext.Provider value={name}>
            <div>
            <h1>ContextDemo</h1>
            <hr/>
            <CompA/>
        </div>
        </employeeNameContext.Provider>
    )
}
export default ContextDemo