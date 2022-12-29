import React, { useState } from "react";

function Menu(props){
    const[count,setCount]=useState(0)

    const increment= ()=>{
        setCount(count+1)
    }
    const decrement = ()=>{
        setCount(count-1)
    }

    return(
        <div className="Product">
        {
            props.item.map(
             i=>{
                 return <div className="Product-container">
                     
                     <img width='100' src={`https://www.app.tutorjoes.in/img/food/${i.PIC}`}/>
                
                     <h6>{i.NAME}</h6><br/>
                     <h5>{i.SHOP}</h5><br/>
                     <div className="rate">
                     <h5>{i.FTYPE} Rs.{i.AMT}</h5>
                     <button onClick={increment}>+</button>{count}<button onClick={decrement}>-</button>
                     </div>
                 </div>
             }
            ) 
         }
         </div>
    )
}
export default Menu;