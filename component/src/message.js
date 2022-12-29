import React from "react";
import { useSelector,useDispatch } from "react-redux";
import {ak} from './msgSlice';

 function Message()
{
    const txt = useSelector(state=>state)
    const dispatch = useDispatch()

    return(
        <div>
            {txt.message.msg}
            <button onClick={()=>dispatch(ak())}>Click</button>
        </div>
    )
}
export default Message;