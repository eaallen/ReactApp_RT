import React from 'react';
import logo from '../product_images/public/media/products/apple-3.png';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../product_images/src/products'
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron,Button } from 'react-bootstrap';


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
                            {product.description}
                        </p>
                        <Button variant="warning">Buy ${product.price}</Button>
                    </Col>
                    
                    <Col className="text-right">
                        <img src={logo} alt={product.filename}/>
                    </Col>
                </Row> 
            </Container>   
        </div>
  );
}

export default ProductDetail;
