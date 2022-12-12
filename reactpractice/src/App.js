
import './App.css';
// import HooksDemo from './hooksDemo';

import {BrowserRouter,Routes,Route} from "react-router-dom";
import Create from './create';
import Read from './read';
import Update from './update';
function App() {

  return (
    <BrowserRouter>
     <div className="Main">
      <h1>React Crud Operations</h1>

     <Routes>
      
      <Route path='/' element={<Create/>}/>
      <Route path='/read' element={<Read/>}/>
      <Route path='/update' element={<Update/>}/>
      

     </Routes>
     </div>

    </BrowserRouter>
    
    
  );
}

// const App=()=>
// {
//   return(
//     <div className='App'>
//       <HooksDemo/>

//     </div>
//   )
// }

export default App;
