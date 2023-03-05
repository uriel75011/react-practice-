import { useParams } from "react-router-dom"
import useFetch from "./useFetch";  
import './blogdeatailsstylesheet.css'

const Blogsdeatail= ()=>{
    const {id} =useParams();
    const {data:name,errormessage,isloding}=useFetch('http://localhost:8000/names/' +id);
    return(
       <div className="Blogsdeatail"> 
             {errormessage && <div> <h1>{errormessage}</h1>  </div>}
        {isloding && <div>loading.... plz wait...</div>}
        {name && (
            <article>
        <h1>{name.Sname}</h1>
        <p>{name.Sname} IS MY BEST ISRAELI SINGER!!
        <br/>
           {name.Sname} IS {name.Age} YEARS OLD!
           <br/>
         THE BEST SONG THAT I LIKE FROM {name.Sname} IS {name.Bestsong}.</p>
           </article>
           )}
            
            </div>
    )
}
export default Blogsdeatail;