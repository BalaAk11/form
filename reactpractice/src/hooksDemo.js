import React, { useState } from 'react'
import Hooks2 from './hooks2'

const HooksDemo =(props)=>
{
    const [name,setName]=useState("Mahendra")
    const [course,setCourse]=useState("React")
    const [isToggle,setIsToggle]=useState(true)

    const update=(childData)=>{
        setCourse(childData)
    }
    const showHooks2=()=>
    {
        setIsToggle(!isToggle)
    }
    return(
        <div className='hooks'>
            <h1>Hooks</h1>
            <h2>Name :{name}</h2>
            <h2>Course:{course}</h2>
           <button onClick={showHooks2}>show Hooks2:{isToggle?"Enable":"Disable"}</button>
            <hr/>
            {
                isToggle?<Hooks2 updateParent={update}/>:<></>
            }
        </div>
    )
}

export default HooksDemo