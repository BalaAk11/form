import React, { useState } from "react";
import Hoc from "./hoc";
const HoverCounter=(props)=>
{
    
    
    return(
        <div>
            <button onMouseOver={props.increment}>+</button>
            {props.counter}
            <button onMouseOver={props.decrement}>-</button>
        </div>
    )
}
export default Hoc(HoverCounter)