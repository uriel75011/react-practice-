 import './blogliststylesheet.css'
 import { useState } from 'react';  
import { Link } from 'react-router-dom';
 const Bloglist = ({names}) => {
    const [leters,setleters]=useState('')
    const changehandler=((event)=>{
        setleters(event.target.value)
    })
    const filternames = names.filter(item=>{
        return item.Sname.includes(leters) || item.Bestsong.includes(leters)
 })
    return ( 
        
        <div className="Bloglist">  
       <input type='text' value={leters} onChange={changehandler} />
       { filternames.map((name) => (
        <div className="blog-preview"key={name.Id}>
            <Link to={`/names/${name.id}`}>
           <h2>{name.Sname}</h2> 
           </Link>
        </div>   
       ))}
       
        </div>
    );
}
 
export default Bloglist ;