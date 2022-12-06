import React,{useEffect, useState} from "react";

function Hello(props)
{
    const [name,setName]=useState("Harish")
    const [course,setCourse]=useState('React')
    const [student,setStudent]=useState({name:"Bala",course:"React"})

    const update=()=>{
        setName('Ashok')
    }
    //componentDidMount()
    useEffect(()=>{
        setTimeout(()=>setStudent('Python'),5000)
    },[])

    //componentDidUpdate()
    // useEffect(()=>{
      
    //     console.log('course is updated');
    // },[name])

    return(
        <div>
            {/* <h1>Hello {props.name}</h1>
            <h1>Welcome {name}</h1>
            <h2>Course :{course}</h2>
            <button onClick={update}>updateName</button> */}

            <h1>Welcome {student.course}</h1>
        </div>
    )
}
export default Hello