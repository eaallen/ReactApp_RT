import React from 'react';
import logo from '../product_images/public/media/products/water_bottle-1.png';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,Button,Jumbotron, Card,  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function ProductCard(props) {
    
    const path ='../product_images/public/media/products/'
    const product_image = path+props.filename+'-1.png'
    console.log('image path',props.filename)
    return (
        <>
        <div>
            <Card bg='primary' text='white'>
                <Card.Img variant="top" src={logo} alt={props.name}/>
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Aliquam non ipsum enim. ${props.price}.
                    </Card.Text>
                    <Link to="/ProductDetail" className="btn btn-success" variant="primary" style={{position: "absolute", top: '0px', right: '0'}}>Details</Link>
                </Card.Body>
            </Card>


        </div>
        <br/>
        </>
  );
}

export default ProductCard;
