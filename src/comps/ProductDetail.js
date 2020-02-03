import React from 'react';
import logo from '../product_images/public/media/products/apple-3.png';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../product_images/src/products'
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';


function ProductDetail(props) {
    let match = useRouteMatch("/product/:id");
    let prod_id = match.params.id
    const array =  Object.values(PRODUCTS);
    let product = array.find(x=> x.id===prod_id)


    return (
        <div>
            
            <Container>
                <Row>
                    <Col>
                        <h2>
                            {product.name}
                        </h2>
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
