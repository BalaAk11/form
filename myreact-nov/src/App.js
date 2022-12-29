import { Counter } from "./features/posts/counter";

function App() {
  return(
    <div>
      <Counter/>
    </div>
  )
  
}






// import logo from './logo.svg';
// import {createStore} from 'redux'
// import ReduxDemo from './reduxDemo';
// import { Provider } from 'react-redux';
// // import pic from './images/.banner.jpg';
// import ps from './images/ps.jpg'
// import vk from './images/vk.jpg'
// import { useState } from 'react';
// //1.Actions create
// export const PonnienSelvanAction=()=>({type:"PS"})
// export const ViratKoliAction=()=>({type:"VK"})
// export const subscribedAction=()=>({type:"SC"})
// export const updateAction=()=>({type:'update'})
// function App() {
// const initialValue={
//   img:"",
//   msg:"select Images",
//   isSubscribed:false
// }



// //selector
// const PS='PS';
// const SC='SC';
// const VK='VK';
// const UP='update'

// //2.Reducer
// const imageReducer=(state=initialValue,actions)=>
// {
//   switch(actions.type)
//   {
//     case SC:
//         return {...state,isSubscribed:!state.isSubscribed}
//     case PS:
//         return {...state,img:{ps},msg:"PonnienSelvan"}
//      case VK:
//       return {...state,img:{vk},msg:"ViratKholi"}
//       case UP:
//         return {...state,}
//     default:
//       return {...state,msg:'No image selected'}
//   }
// }
 
// //3.create store
// let store=createStore(imageReducer)

// //4.use dispath to use actions


 
//   return (
//    <Provider store={store}>
//      <div className="App">

// <h1>Redux</h1>

// <ReduxDemo/>

// </div>
//    </Provider>
//   );
// }

export default App;
