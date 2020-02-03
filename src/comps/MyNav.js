import React from 'react';
import { Container, Row, Col,Nav,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
//import Footer from 'react-bootstrap/';



function MyNav(props) {
    
    return (
        <div
            className={props.className}
        >           
        <Nav defaultActiveKey="/">
                    <Nav.Item>
                        <Nav.Link href={"/"}>All</Nav.Link>
                    </Nav.Item>
                    {props.category.map(item =>{return <Nav.Item key={item+'parent'}> 
                        <Nav.Link href={'/filter/'+item} key={item}>{item}</Nav.Link> </Nav.Item>})}
                </Nav>

        </div>
  );
}

export default MyNav;
