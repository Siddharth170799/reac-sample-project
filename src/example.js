import React,{ useState } from "react";
import { Button } from "react-bootstrap";

//state varaiables/////n

// const Example=()=>{
// const [data,setData]=useState("initial value")



// return (
//     <div>I am from example component
//         <button onClick={()=>setData("sid")}>sid</button>
//         <button onClick={()=>setData("revi")} >revi</button>
//         <button onClick={()=>setData("nag")}>nag</button>
//         <div>{data}</div>
//     </div>
// )



// }

/// set variables////
const Example=()=>{
    const [data,setData]=useState("initial value")

    return (
        <><button onClick={()=>setData("sid")}>sid</button>
        <button onClick={()=>setData("nag")}>nag</button>
        <button onClick={()=>setData("shiva")}>shiva</button>
        <div>{data}</div>
        </>
       
        
    )
}
export default Example