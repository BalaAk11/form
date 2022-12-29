import React from "react";
import {useDispatch,useSelector} from 'react-redux'
import {IncrementAction,DecrementAction} from './App';
function Reduxdem (){
    const counter= useSelector(state=>state)
    const dispatch = useDispatch()
 return(
    <div>
     <button onClick={()=>dispatch(IncrementAction())}>increment</button>
     {counter.count}
     <button onClick={()=>dispatch(DecrementAction())}>decrement</button>
    </div>
 )
}
export default Reduxdem