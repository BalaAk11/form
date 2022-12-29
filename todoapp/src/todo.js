import React, { useState } from 'react';
import TodoList from './todolist';

function Todo()
{
    const[data,setData]=useState('');
    const [list,setList]=useState([]);
 

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(data.length===0)
        {
            return;
        }
        setList((oldData)=>[...oldData,data]);
        setData('')
        
    }
const handleDelete = (id)=>{
       console.log(id);
       setList(prev=>prev.filter((item,index)=>index!==id))
}
    

 return(
    <div className='data'>
        <h3>ToDo</h3>
        
        
            <input type='text' onChange={(e) =>setData(e.target.value)} placeholder='What needs to be done?' value={data} /><br/><br/>
            <button onClick={(e)=>handleSubmit(e)}>Add Todo</button><br/><br/>
        

        <TodoList list={list} remove={handleDelete}/>
        
    </div>
 )
}
export default Todo;