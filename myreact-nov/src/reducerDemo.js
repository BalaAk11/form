import React, { useReducer, useState } from "react";
import { initialState, reducer } from "./App";


const ReducerDemo=()=>
{
  const [currentState,dispatch]=useReducer(reducer,initialState)

    return(
        <div>
            <h1>Reducer</h1>
            <button onClick={()=>dispatch({type:"increment"})}>+</button>
                {currentState.count}
            <button onClick={()=>dispatch({type:"decrement"})}>-</button>
        </div>
    )
}
export default ReducerDemo