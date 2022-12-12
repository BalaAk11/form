import React, { useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"

function Create(){
    const [id,setId]=useState(0)
    const[firstname,setFirstName]=useState("")
    const[lastname,setLastName]=useState("")
    const[checkbox,setCheckbox]=useState(false)

const addData = ()=>{
 axios.post("http://localhost:3000/user",{firstname,lastname,checkbox}) 
}

    return(
        <div>
            
         <form className="form">
           <label>First Name</label>
           <input type="text" placeholder="Enter your first name" onChange={e=>setFirstName(e.target.value)}></input><br/><br/>
           <label>Last Name</label>
           <input placeholder="Enter your last name" onChange={e=>setLastName(e.target.value)}/><br/><br/>
           <input type="checkbox" onChange={e=>setCheckbox(!checkbox)} ></input>
           <label>I agree to the terms and conditions</label><br/><br/>
           <button onClick={addData}>Submit</button>
         </form>
         
         <Link to="/read">Next Page </Link>
         
        </div>
    )
}
export default Create;