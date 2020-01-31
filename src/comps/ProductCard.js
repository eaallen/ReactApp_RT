import React from 'react';
import logo from '../product_images/public/media/products/apple-3.png';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,Button,Jumbotron, Card,  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function ProductCard(props) {
  
    return (
        <div
            className={props.className}
        >
            <Card>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Lorem ipsum</Card.Title>
                    <Card.Text>
                        Aliquam non ipsum enim. Vivamus.
                    </Card.Text>
                    <Link href="product/id" className="btn btn-primary" variant="primary" style={{position: "absolute", top: '0px', right: '0'}}>Details</Link>
                </Card.Body>
            </Card>


        </div>
  );
}

export default ProductCard;
