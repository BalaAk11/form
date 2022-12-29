import { React, useState } from "react";
import {useDispatch,useSelector} from  'react-redux'
import { bindActionCreators } from "redux";
import {PonnienSelvanAction,ViratKoliAction,subscribedAction} from './App'
// import pic from "./images";
const ReduxDemo=()=>
{
    
    const image=useSelector(state=>state)
    const dispatch=useDispatch()
    return(
        <div>
            <h1>{image.msg}</h1>
            <img src={image.img.ps} width="200px"/>
            <img src={image.img.vk} width="100px"/>
                            
            <button onClick={()=>dispatch(PonnienSelvanAction())} disabled={image.isSubscribed?false:true}>PonnienSelvan</button>
            <button onClick={()=>dispatch(ViratKoliAction())} disabled={image.isSubscribed?false:true}>ViratKoli</button>
            <button onClick={()=>dispatch(subscribedAction())}>{image.isSubscribed?'Subscribed':'unSubscribed'}</button>
        </div>
    )
}
export default ReduxDemo