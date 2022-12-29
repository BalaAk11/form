import React from "react";

function TodoList(props){

    console.log(props.list)
    return(
       
        <div className="list">
            
            <ol>
             {props.list.map((item,index)=>(
               
                <li key={index}>{item} <button onClick={()=>props.remove(index)}>X</button></li> 
            
             ))}
             </ol>
        </div>
    )
}
export default TodoList;