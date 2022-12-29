import React from "react";
import pic from './images/buy-1.jpg';
import pic1 from './images/user-1.png';


function Img (){
    return(
        <div>
            <img src={pic} width="200px"/>
            <img src={pic1} width="200px"/>            
        </div>
    )
}
export default Img;