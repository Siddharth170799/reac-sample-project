import { useState } from "react";

import { Button } from "react-bootstrap";


const Hi =()=>{
const [namaste,setData]= useState("hello")
// console.log(setData)

return (
    <>
    <div>hi</div>
     <button onClick={()=>setData("siddharth")}>sid</button>
    <button onClick={()=>setData("nagendra")}>nag</button>
    <button onClick={()=>setData("Ravi")}>ravi</button>
    <div>{namaste}</div> 

    </>
)






}

export default Hi
