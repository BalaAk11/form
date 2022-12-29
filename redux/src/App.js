import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux'
import Reduxdem from './reduxdem';

//1.write action

export const UpdateAction=()=>({type:"update"})
export const DeleteAction=()=>({type:"delete"})
export const IncrementAction=()=>({type:"increment"})
export const DecrementAction=()=>({type:"decrement"})


function App() {

  const initialvalue = {
    name:"Bala",
    course:"React",
    count:0
  }

//2.create selector

  const update="update";
  const ondelete="delete";
  const increment="increment";
  const decrement="decrement";

//3. create Reducer
  
  const actionReducer = (state=initialvalue,action)=>{
    switch (action.type)
    {
      case increment:
        return {...state,count:state.count+1}
      
      case decrement:
          return {...state,count:state.count-1}
      default:
        return state
    }
  }
//4. create store
let store = createStore(actionReducer);
  return (
    <Provider store={store}>
      <div className="App">
      <Reduxdem/>
      </div>
    </Provider>
  );
}

export default App;
