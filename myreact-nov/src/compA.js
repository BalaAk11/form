import React,{useState,useEffect,useRef} from "react";
import CompB from "./compB";

function CompA()
{
    const [inputValue, setInputValue] = useState("hello");
    const count = useRef(0);//count={current:0}
    const inpele=useRef()
    // const [count,setCount]=useState(0)
  
    useEffect(() => {
      count.current = count.current + 1;
      setTimeout(()=>setInputValue(inpele.current.value),3000)
    // setCount(count+1)
    });
  
    return (
      <>
      <h1>{inputValue}</h1>
        <input
          type="text"
         
          ref={inpele}
        />
        <h1>Render Count: {count.current}</h1>
      </>
    );
}
export default CompA