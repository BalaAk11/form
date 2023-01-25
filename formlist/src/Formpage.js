import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

function FormPage(){


    const [name,setName]=useState("")
    const [number,setNumber]=useState("")
    const [text,setText]=useState("")
    const[dropDownValue,setDropDownValue]=useState("")
    const[radioValue,setRadioValue]=useState("")
    const [rangeValue,setRangeValue]=useState(50)
    const [fileName,setFileName]=useState("")
    const [imgName,setImgName]=useState("")
    const[checkBoxValue,setCheckBoxValue]=useState(false)


    const[nameError,setNameError]=useState("")
    const[numberError,setNumberError]=useState("")    
    const[textError,setTextError]=useState("")
    const[dropDownError,setDropDownError]=useState("")
    const[radioError,setRadioError]=useState("")
    const [fileNameError,setFileNameError]=useState("")
    const [imgNameError,setImgNameError]=useState("")
    const [chkBoxError,setChkBoxError]=useState("")

    const ddChange=(e)=>{
        setDropDownValue(e.target.value)
    }

    const handleChange=(e)=>{
        setRadioValue(e.target.value)
    }

    const handleRange=(e)=>{
        setRangeValue(e.target.value)
    }
    const validate=()=>{
    

        if(name==""){
            setNameError("*Name must not be empty")
        }
        
        if(number==""){
            setNumberError("*Number must not be empty")
        }

        if(text==""){
            setTextError("*Text field must not be empty")
        }

       if(dropDownValue==""){
        setDropDownError('*Must select on option')
       }
       if(radioValue==""){
        setRadioError('*Select any one option')
       }
       if(!fileName)
       {
        setFileNameError('*Select any file')
       }
       if(!imgName)
       {
        setImgNameError('*Select any Image')
       }
       if(!checkBoxValue)
       {
        setChkBoxError('*Must agree to the terms')
       }
     else{
        return true
     }
    
    
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(validate())
        {
            axios.post('http://localhost:3000/userData',{name,number,text,dropDownValue,radioValue,rangeValue})
        }
       
    }

    return(
        <div className="mainForm">
            <div className="form">
            <form onSubmit={handleSubmit}>
                <h2><u>Form</u></h2>
                <label for="textbox">Enter Name</label>
                    <input type="text" id="textbox" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}></input>
                <small>{nameError}</small><br/><br/>

                <label for="number">Enter Number</label>
                    <input type="number" id="number" placeholder="Enter Number" onChange={(e)=>setNumber(e.target.value)}></input>
                <small>{numberError}</small><br/><br/>

                <label for="text-area">Enter Text</label>
                    <textarea id="text-area" rows="4" cols="20" onChange={(e)=>setText(e.target.value)}></textarea>
                    <small>{textError}</small>
                    <br/><br/>
                
                <label for="drop-down">Select your option</label>
                <select id="drop-down" value={dropDownValue} onChange={ddChange}>
                    <option selected hidden>--Select your option--</option>
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                </select>
                <small>{dropDownError}</small>
                <br/><br/>
                
                <label>Choose your option     </label>
                    <input type="radio" name="radio-btn" value="option 1" checked={radioValue==='option 1'} onChange={handleChange}></input>
                <label>option 1</label>
                    <input type="radio" name="radio-btn" value="option 2" checked={radioValue==='option 2'} onChange={handleChange}></input>
                <label>option 2</label>
                    <input type="radio" name="radio-btn" value="option 3" checked={radioValue==='option 3'} onChange={handleChange}></input>
                <label>option 3</label><br/>
                <small>{radioError}</small>
                <br/><br/>
                

                <label for="range-slider">Enter your range   </label>
                <input type="range" min="0" max="100" value={rangeValue} onChange={handleRange}></input>{rangeValue}<br/><br/>

                <label for="file-upload">Choose a file to upload</label><br/>
                <input type="file" id="file-upload" onChange={e=>setFileName(e.target.files[0])}></input><br/><small>{fileNameError}</small><br/><br/>

                <label for="img-upload">Choose a Image</label>
                <input type="file" onChange={e=>setImgName(e.target.files[0])}></input><br/><small>{imgNameError}</small>
                <br/><br/>

                <input type="checkbox" id="chkbox" onChange={e=>setCheckBoxValue(!checkBoxValue)}></input>
                <label for="chkBox">I Agree to terms and Conditions</label><br/>
                <small>{chkBoxError}</small>
                <br/><br/>
                <button type="submit">Submit</button>
                <button type='reset'>Clear</button>



            </form> 
             </div>
             <button><Link to='/'>Back</Link></button>
        </div>
    )
}
export default FormPage