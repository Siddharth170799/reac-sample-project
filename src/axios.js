
import React ,{useEffect,useState} from "react";
import axios from "axios";





let Hello5=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://dummyjson.com/products").then((res)=>{
            setData(res.data.products)
            console.log(res)
        })
        
    },)

    return(

<div>hello world
    {data.map((item)=><div>{item.id+"   "+item.title+"    "+item.description}</div>
        
    )}
</div>       
    )
}

export default Hello5