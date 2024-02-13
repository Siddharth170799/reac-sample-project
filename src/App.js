import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import siddharth from './siddharth';
// import nagendra from './nagendra';
// import sandy from './sandy';
import Example from './example';

import Hi from './Hi';
// import Classexample from './component';
// import { Component } from 'react';
// import Siddharth from './siddharth';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Classexample from './classComponent';
import Example2 from './classComponent';
import Hello from './classComponent2';
import LifeCycle from './lifecycle';
import LifeCycleHook from './lifeCycleHook';
import Hello5 from './axios';
// import Sid from './axiosSir';
import Sid from './axiosSir3';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Commerce from './fsdCommerce';
import ProductDetails from './productDetails';

function App() {
  return (
    <>
    
      <BrowserRouter>
    <Routes>

     <Route path="/" element={<Commerce/>}/>
     <Route path="/productDetail/:id"  element={<ProductDetails/>}/>


    </Routes>
    </BrowserRouter>
 

<Commerce/>
<ProductDetails/>


</>
  );
}


export default App;