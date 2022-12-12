import React,{useEffect, useState} from "react";

function Hello(props)
{
    const [name,setName]=useState("Harish")
    const [course,setCourse]=useState('React')
    const [student,setStudent]=useState({name:"Bala",course:"React"})


    const update=()=>{
        // setStudent({course:"ReactNative"})
        setStudent((prev)=>{return {...prev,course:"PHP"}})
    }
    //componentDidMount()
    useEffect(()=>{
        setTimeout(()=>setName('Bala'),5000)
    },[])

    //componentDidUpdate()
    useEffect(()=>{
      
        console.log('name is updated');
    },[name])

    useEffect(()=>{
      
      

        return (()=>console.log('component Removed'))
    },[])

    return(
        <div>
            {/* {/* <h1>Hello {props.name}</h1> */}
            {/* // <h1>Welcome {name}</h1>
            // <h2>Course :{course}</h2> */}
            <h1>Welcome {name}</h1>
            <button onClick={update}>updateName</button> 

            <h1>Welcome {student.course}</h1>
        </div>
    )
}
export default Hello