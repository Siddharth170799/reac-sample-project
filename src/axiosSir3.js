import { useEffect,useState } from "react"

import axios from "axios"
import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';





const Sid=()=>{
    const [data,setData]=useState([])
    const [img,setImage]=useState([])
    
   const datafetch=async ()=>{
    
   

    const apiinfo= await axios.get('https://fakestoreapi.com/products')
    console.log(apiinfo)
    setData(apiinfo.data)

    // const apiinfo2= await axios.get('https://fakestoreapi.com/products')
    // setImage(apiinfo2.data)

    

   }
    useEffect(()=>{
        setTimeout(()=>{
            datafetch() 
        },(3000))
    //    datafetch()
    },[])


    return (
        <>


{data ? <Row className="my-5">{

    data.map((item)=>{

        return (
            


            
            <Col md={3}>
                
                <Card className="mt-3" style={{ width: '18rem' }} height={'500px'}>
                                <Card.Img variant="top" src={item.image} height={'250px'}  />
                                <Card.Body>
                                  <Card.Title>{item.title}</Card.Title>
                                  <Card.Text>
                                    {item.description}
                                  </Card.Text>
                                  <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                              </Card>

            </Col>
        )

    })
}



 </Row>

 :<div>Loading</div>}



        </>
    )



}

export default Sid