import React from 'react';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,Button,Jumbotron, Card,  } from 'react-bootstrap';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  


function ProductCard(props) {
    
   
    return (
        <>
        
        <div>
            <Card bg='secoundary' text='black'>
                <Card.Img variant="top" src={`../product_images/${props.filename}-1.png`} alt={props.name}/>
                {console.log(props.filename)}
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Aliquam non ipsum enim. ${props.price}.
                    </Card.Text>
                    <Link to={"/product/"+props.id} className="btn btn-primary" variant="primary" style={{position: "absolute", top: '0px', right: '0',}}>Details</Link>
                </Card.Body>
            </Card>


        </div>
        <br/>
        </>
  );
}

export default ProductCard;
