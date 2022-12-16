import React,{useContext} from "react";
import { employeeNameContext } from "./contextDemo";

function CompC()
{
    const empName=useContext(employeeNameContext)
    return(
        <div>
            <h1>CompC</h1>
            <h2>Name:{empName}</h2>
        </div>
    )
}
export default CompC