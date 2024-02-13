import { useState } from "react"
import "./new.css"


const Source=()=>{

    const [data,setdata]=useState(true)



    return(
         

        <div className="body">
            <div className={data? "rectanglered":"rectangleaqua"}>hello
         <button onMouseEnter={()=>{
            setdata(!data)
         }}
         onMouseLeave={()=>{
            setdata(!data)
         }}
         onClick={()=>{
            setdata(!data)
         }}>


            <div className="circle absolute"></div>
         </button>
         </div>
        </div>



    )
}


export default Source