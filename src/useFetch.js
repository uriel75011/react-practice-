import { useState,useEffect } from "react"
//יצירת הוק המקבל יוו ארר אלל ומחזיר לי דאטא שזה כביכול מערך של אובייקטים מסוג גיסון 
//ומחזיר לי הודעת שגיאה במידה ולא קיים יוחק נאלל
//ומחזיר הודאת נטען במידה ולא קיבלנו עדיין ריספונס
//הריספונס גם  יכול להיות שגיאה ולאו דווקא הנתונים
const useFetch =(url)=>{
    
    const [data,setdata]=useState(null)
    const [isloding,setisloding]=useState(true)
    const [errormessage,seterr]=useState(null)
useEffect(()=>{
    //האבורט הוא פונקציה שברגע ואני כבר לא מרנדר את אותו הכומפוננטה אז הוא יעצור את הפץ
    //מכיון שאם לא הרי תיהיה לנו שגיאה כי הוא עוד לא סיים לקבל נתנים ולעדכן את יוזסטייט ודבר כזה יהווב לנו שגיאה
    const abortCont =new AbortController();
 fetch(url ,{signal:abortCont.signal})
 .then((responce)=>{
    if(!responce.ok){
        throw Error('could not fetch that data for the ressorce');
    }
    return responce.json();
})
 .then((data)=>{setdata(data ); setisloding(false); seterr(null);})
 .catch((err)=>{
    //בדיקה שהשגיאה שהתקבלה זה בגלל אבורט ואז נדע שבכל בסדר
    //כי אחרת זה סתפ יציג שגיאה ואין לי צורך בזה כי הפוך אנחנו בעד השגיאה הספיציפית הזאת 
    if(err.name==='AbortError'){
        console.log('aborted')
    }
    else{
        setisloding(false);
        seterr(err.message)
    }
   
 })
 return()=>
    abortCont.abort();
 
},[url])
return(
    {data,isloding,errormessage}
)
}
export default useFetch;