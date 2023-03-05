
import useFetch from "./useFetch";  
import Bloglist from "./Bloglist";

const Home = ()  => {
    const {data: names,isloding,errormessage}=useFetch('http://localhost:8000/names')

    return (
        <div className="home">  
        {errormessage && <div> <h1>{errormessage}</h1>  </div>}
        {isloding && <div>loading.... plz wait...</div>}
      {names && <Bloglist names={names}/>}
        </div>
      );
}
 
export default Home ;