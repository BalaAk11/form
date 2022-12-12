import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Update(){

    const [id,setId]=useState(0)
    const[firstname,setFirstName]=useState("")
    const[lastname,setLastName]=useState("")
    const[checkbox,setCheckbox]=useState(false)

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setFirstName(localStorage.getItem("firstname"));
        setLastName(localStorage.getItem("lastname"));
        setCheckbox(localStorage.getItem("checkbox"))
    },[])
    
    const updateData = ()=>{
        axios.put(`http://localhost:3000/user/${id}`,{firstname,lastname,checkbox})
    }
   
    return(
        <div>
            <h1>Update Here</h1>
        <form className="form">
           <label>First Name</label>
           <input type="text" placeholder="Enter your first name" value={firstname} onChange={e=>setFirstName(e.target.value)}></input><br/><br/>
           <label>Last Name</label>
           <input placeholder="Enter your last name" value={lastname} onChange={e=>setLastName(e.target.value)}/><br/><br/>
           <input type="checkbox" checked={checkbox} onChange={e=>setCheckbox(!checkbox)} ></input>
           <label>I agree to the terms and conditions</label><br/><br/>
           <button onClick={updateData} >Update</button>
        </form>
            <Link to='/read'> Previous Page</Link>
        </div>
    )
}
export default Update
