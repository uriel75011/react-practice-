import { useState } from "react";
import './createstylesheet.css';
// import {useHistory}   from 'react-router-dom'
// import { Navigate } from "react-router-dom";


const Create = () => {
    const [Sname,setname]=useState();
    const [Age,setage]=useState();
    const [Bestsong,setbestsong]=useState();
    // const history =useHistory();
    const handler =(e)=>{
        e.preventDefault();
        const names = {Sname,Age,Bestsong}
        fetch('http://localhost:8000/names',{
            method:'POST',
            headers: { "Content-Type": "application/json" },
         body: JSON.stringify(names)
        })
        .then(()=>{
            console.log('NEW SINGER ADDED');
            // history.push('/');
            // <Navigate to="/" replace={true} />
        })
        
    }

    return ( 
       <form onSubmit={handler}>
        <div className="create">   
        <label>שם הזמר</label>
        <textarea
        required
        value={Sname}
        onChange={(e)=>{
        setname(e.target.value)
        }}
        >
        </textarea>
         <label>גיל הזמר</label>
        <textarea
        required
        value={Age}
        onChange={(e)=>{
            setage(e.target.value)
        }}
        >
        </textarea>
        <label>השיר האהוב</label>
        <textarea
        required
        value={Bestsong}
        onChange={(e)=>{
            setbestsong(e.target.value)
        }}
        >
        </textarea>
        <button>אישור והוספה</button>
        </div>
       </form>
     );
}
 
export default Create;