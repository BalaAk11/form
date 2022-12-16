import React, { useState } from "react";
import Hoc from "./hoc";
const ClickCounter=(props)=>
{
    
    return(
        <div>
            <button onClick={props.increment}>+</button>
            {props.counter}
            <button onClick={props.decrement}>-</button>
        </div>
    )
}
export default Hoc(ClickCounter)