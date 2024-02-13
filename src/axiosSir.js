// import { useEffect,useState } from "react"

// import axios from "axios"
// import React from "react"
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { Row,Col } from "react-bootstrap";
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';





// const Sid=()=>{
//     const [data,setData]=useState([])
//     const [img,setImage]=useState([])
    
//    const datafetch=async ()=>{
    
   

//     const apiinfo= await axios.get('https://fakestoreapi.com/products')
//     console.log(apiinfo)
//     setData(apiinfo.data)

//     const apiinfo2= await axios.get('https://fakestoreapi.com/products')
//     setImage(apiinfo2.data)

    

//    }
//     useEffect(()=>{
//        datafetch()
//     },[])


//     return (
//         <>
//         <div>Hello World </div>
//       {data ? data.map((item)=>(
//       <div> {item.id}</div> 
     


//       )): <div>Loading</div>}


// {img ? img.map((item)=>{
//     return (item.title)
//   }):<div>Loading</div>}


//       <div><Card style={{ width: '18rem' }}>
//       <Card.Img variant="top" src="holder.js/100px180" />
//       <Card.Body>
//         <Card.Title>{}</Card.Title>
//         <Card.Text>
  
//         </Card.Text>
//         <Button variant="primary">Go somewhere</Button>
//       </Card.Body>
//     </Card></div>
     
//         </>
//     )



// }

// export default Sid