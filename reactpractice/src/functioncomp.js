import React, { useEffect, useState } from "react";
import axios from "axios";

function Emp(){

    const [id,setId]=useState(0)
    const [name,setName]=useState("")
    const [employee,setEmployee]=useState([])

    useEffect(()=>{
         axios.get("http://localhost:3000/employee").then(e=>setEmployee(e.data))
    })

    return(
        <div>
            <table border="2px solid black">
                <thead>
                <tr><th>ID</th><th>Name</th></tr>
                </thead>
                <tbody>
               {
                employee.map(u=>
                    <tr key={u.id}><td>{u.id}</td><td>{u.name}</td></tr>)
               }
                </tbody>
            </table>
        </div>
    )
   
}
export default Emp