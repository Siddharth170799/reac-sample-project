import React,{useEffect,useState} from "react";


const LifeCycleHook =()=>{

    const [count,setCount]=useState(0)
    const [data,setData]=useState("sid")

    useEffect(()=>{
        console.log("Inside the useEffect")
        return ()=>{
            setData("")
        }
    },[data])

    return (
        <div>
            <div style={{background:"blue"}} onMouseOver={()=>setCount(count+1)}>Increment</div>
            <div style={{background:"red"}} onMouseOver={()=>setCount(count-1)}>Decrement</div>
            <div style={{background:"black", color:"white"}} onMouseOver={()=>setCount(0)}>reset</div>
            <div>{count}</div>
            <button onClick={()=>setData("siddharth")}>click me</button>
            {data}
        </div>
    )



}

export default LifeCycleHook