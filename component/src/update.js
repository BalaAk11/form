import React from 'react';
import {createStore} from 'redux';
import {Provider} from "react-redux"
import Update2 from './update2';
export const UpdateAction=(data)=>({type:"hello",payload:data})
function Update()
{
    const initialState={
        name:"Bala"
    }

    const UpdateReducer = (state=initialState,action)=>{
        switch(action.type){
            case 'hello':
                return{...state,name:action.payload}
            default:
                return state
            
        }
    }
    let store = createStore(UpdateReducer)
    return(
        <Provider store={store}>
          <div>
            <Update2/>
          </div>
        </Provider>
    )
}
export default Update