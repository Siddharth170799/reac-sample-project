import React,{useState,useEffect} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row,Col } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import ProductDetails from "./productDetails";
import { Link } from "react-router-dom";


const Commerce=()=>{
const [data,setData]=useState();
const [img,setImg]=useState()


     const dataFetch=async()=>{
      const apiData= await axios.get('https://fakestoreapi.com/products')
      setData(apiData?.data)
      //   const imgData= await  axios.get('https://fakestoreapi.com/products')
      // setImg(imgData.data)
        
     }
    useEffect(()=>{
      dataFetch()
    },[])

    console.log("sandy is a gangster",data)
    return(
        <div>
             {/* <Navbar bg="danger" data-bs-theme="dark" fixed="top" className="mb-5">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
            {
              data? <Row className="my-5">
                    {
                         data.map((item)=>{
                            return (
                            
                                <Col md={3}>

                                    <Card className="mt-3" style={{ width: '18rem' }} height={'500px'}>
                                <Card.Img variant="top" src={item?.image} height={'250px'}  />
                                <Card.Body>
                                  <Card.Title>{item?.title}</Card.Title>
                                  <Card.Text>
                                    {item?.description}
                                  </Card.Text>
                                  <Link to={'productDetails/:id'}><Button  variant="primary">Go to product details</Button></Link> 
                                </Card.Body>
                              </Card>
                              </Col>
     
                                
                               
                            )
                        })
                    }
              </Row>
               : <div>Loading...</div>
            }
        </div>
    )
}

export default Commerce