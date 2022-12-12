import React, { useEffect, useState } from "react";
import axios from "axios";
import {Link} from "react-router-dom"



function Read(){
    const[userData,setUserData]=useState([])

    useEffect(()=>{
         axios.get("http://localhost:3000/user").then(res=>setUserData(res.data))
    })

    const setData=(data)=>{
        localStorage.setItem("id",data.id);
        localStorage.setItem("firstname",data.firstname);
        localStorage.setItem("lastname",data.lastname);
        localStorage.setItem("checkbox",data.checkbox)
    }
    
    const onDelete = (id)=>{
        axios.delete(`http://localhost:3000/user/${id}`)
    }
    
   

    return(
        <div>
            <table className="table" border="2px solid black">
                <thead>
                    <tr><th>Id</th><th>FirstName</th><th>LastName</th><th>Status</th><th>Action</th></tr>
                </thead>
                <tbody>
                    {
                        userData.map(e=>{
                            return <tr key={e.id}><td>{e.id}</td><td>{e.firstname}</td><td>{e.lastname}</td><td>{e.checkbox? "Checked": "Unchecked"}</td><td><Link to='/update'><button onClick={()=>setData(e)}>Edit</button></Link><button onClick={(id)=>onDelete(e.id)}>Delete</button></td></tr>})
                    }
                </tbody>
            </table>

        </div>
    )
}
export default Read;