
import useFetch from "./useFetch";  
import Bloglist from "./Bloglist";

const Home = ()  => {
    const {data: names,isloding,errormessage}=useFetch('http://localhost:8000/names')

    return (
      //בדיקה שהתנאים מתקיימים
      //למשל במערך של האובייטים שלנו ניימס אז אני לא רוצה שהוא יתגשם עד שבאמת לא קבלתי את הנתונים כי הפץ הוא פרומיס 
     //ואז יתכן ויקח זמן לנתונים להגיע ואז הרי אני שולח ערך כפרופס ללא נתנים דבר שיהווה לנו שגיאה
     //כמו כן במידה ויש שגיאה או שהנתונים עוד לא הגיעו אני ארצה להוסיף איניקציה
        <div className="home">  
        {errormessage && <div> <h1>{errormessage}</h1>  </div>}
        {isloding && <div>loading.... plz wait...</div>}
      {names && <Bloglist names={names}/>}
        </div>
      );
}
 
export default Home ;