import React from "react";

function Menu(props){
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
                     </div>
                 </div>
             }
            ) 
         }
         </div>
    )
}
export default Menu;