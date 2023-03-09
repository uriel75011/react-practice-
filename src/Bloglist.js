 import './blogliststylesheet.css'
 import { useState } from 'react';  
import { Link } from 'react-router-dom';


 const Bloglist = ({names}) => {
    const [leters,setleters]=useState('')
    const changehandler=((event)=>{
        setleters(event.target.value)
    })
    //פונקציה המחזירה לי מערך של אוביקטים חדש כאשר יש אות המתאימה לאחד הערכים של האובייקט
    const filternames = names.filter(item=>{
        return item.Sname.includes(leters) || item.Bestsong.includes(leters)
 })
    return ( 
        // תיבת טקסט שיש לו פונקציה אונצינג שברגע ויכנס אות הוא משתמש ביוזסטייט
        //ואז יש לנו פונקציה של פילטר המביאה ערכים חדשים שהתנאים מתקיימים
        //ואז פשוט אנחנו מייצגים את אותו הרשומה החדשה של הפילטר כאשר יהיה בתוכו לינק לדף אחר
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