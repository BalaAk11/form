import './App.css';
import React from 'react';
import { BrowserRouter,Routes,Route } from "react-router-dom";
import FormPage from './Formpage';
import Header from './HeaderpPage';
import ListPage from './Listpage';


function App() {
  
  return (
       <BrowserRouter>
          <div className="app">
              <Routes>
                    <Route path='/' element={<Header/>}/>
                    <Route path='/form' element={<FormPage/>}/>
                    <Route path='/list' element={<ListPage/>}/>
              </Routes>
          </div>
        </BrowserRouter>
  );
}
export default App;
