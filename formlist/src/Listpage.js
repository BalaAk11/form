import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
function ListPage(){
    const [user,setUser]=useState([])

    useEffect(()=>{
        axios.get('http://localhost:3000/userData').then(response=>setUser(response.data))
    },[])
    return(
        <div>
            <h1>List Page</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Number</th>
                        <th>Description</th>
                        <th>DropDown</th>
                        <th>radio</th>
                        <th>Range</th>
                     
                        </tr>
                </thead>
                <tbody>
                    {
                        user && user.map(u=>
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.number}</td>
                            <td>{u.text}</td>
                            <td>{u.dropDownValue}</td>
                            <td>{u.radioValue}</td>
                            <td>{u.rangeValue}</td>
                            
                            </tr>)
                    }
                </tbody>
            </table>
            
            <button><Link to="/">Back</Link></button>
        </div>
    )
}
export default ListPage;