import React from 'react';
import logo from '../product_images/public/media/products/apple-3.png';

import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';


function ProductDetail(props) {
  
    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tincidunt dictum consequat. Morbi imperdiet varius enim 
                            id elementum. Nam tellus erat, aliquet ut consequat ultrices, consequat at urna. Suspendisse ac nunc dictum, egestas leo 
                            pharetra, maximus augue. Donec convallis viverra lorem eu facilisis. Proin a euismod quam, ut mattis felis.
                        </p>
                    </Col>
                    
                    <Col className="text-right">
                        <img src={logo} alt="image"/>
                    </Col>
                </Row> 
            </Container>   
        </div>
  );
}

export default ProductDetail;
