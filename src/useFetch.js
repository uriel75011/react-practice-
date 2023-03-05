import { useState,useEffect } from "react"
const useFetch =(url)=>{
    
    const [data,setdata]=useState(null)
    const [isloding,setisloding]=useState(true)
    const [errormessage,seterr]=useState(null)
useEffect(()=>{
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