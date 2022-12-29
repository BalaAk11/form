import React from 'react';
import { useState } from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { UpdateAction } from './update';

function Update2()
{
    const [name,setName]=useState("")
    const change = useSelector(state=>state)
    const dispatch = useDispatch()
    return(
        <div>
            {change.name}
            <input onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>dispatch(UpdateAction(name))}>change</button>
        </div>
    )
}
export default Update2;