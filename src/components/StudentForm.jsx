import { useState } from "react";
import axios from 'axios';


const StudentForm=()=>{
    const [input, setInput]=useState({});
    const handleInput=(e)=>{
        let name=e.target.name;
        let value=e.target.value;
        setInput(values=>({...values,[name]:value}));
    }
    const handleSubmit=()=>{
        let url="http://localhost:3000/students";

        axios.post(url,input).then((response)=>{
            alert("Student data added successfully")
        })
    }
    return(
        <>
        <h1>This is Student Form</h1>
        Enter Roll No : <input type="text" name="rollno" onChange={handleInput} /><br /><br/>
        Enter Name : <input type="text" name="name" onChange={handleInput} /><br /><br/>
        Enter City : <input type="text" name="city" onChange={handleInput} /><br /><br/>
        Enter Fees : <input type="text" name="fees" onChange={handleInput} /><br /><br/>
        <button onClick={handleSubmit}>Submit</button>
        </>
    )
}

export default StudentForm;