import React from 'react';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';


function Center(props) {
  
    return (
        <div
            className={props.className}
        >
            <Jumbotron className="text-center">
                <h1>Home</h1>
                <i class="fab fa-jedi-order" style={{
                    fontSize: '30rem',
                    color: 'gold',
                    textAlign: 'center',
                    }}>
                </i>          

            </Jumbotron>

            <Row>
                <Col></Col>
                <Col>
                </Col>
                <Col></Col>
            </Row>    
            </div>
  );
}

export default Center;
