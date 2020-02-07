import React, { useState } from 'react';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../products'
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron,Button } from 'react-bootstrap';
import Msg404 from './Msg404';


function ProductDetail(props) {
    let [_img, set_img] = useState(1) 
    let match = useRouteMatch("/product/:id");
    let prod_id = match.params.id
    console.log('guuuuuurrr',prod_id)
    const array =  Object.values(PRODUCTS);
    let product = array.find(x=> x.id===prod_id)
    if(!product){
        return <Msg404 msg={prod_id}></Msg404>
    }
    let arr = [1,2,3,4];

    const handle_change = e =>{        
        set_img(e.target.id)        
    }


    return (
        <div>
            
            <Container>
                <Row>
                    <Col md="5">
                        <h2>
                            {product.name}
                        </h2>
                        <p>
                            {product.description}
                        </p>
                        <Button variant="warning">Buy ${product.price}</Button>
                    </Col>
                    
                    <Col className="text-right" md='5'>
                        <img src={`../product_images/${product.filename}-${_img}.png`} alt={product.filename}/>
                        
                       
                    </Col>
                    <Col md='2'>
                                {arr.map(item => {return <Row key={item + 10}>
                                    <img src={`../product_images/${product.filename}-${item}.png`} style={{width: '50px'}} id={item} key={item+3} onMouseEnter={handle_change}/>
                                </Row>})}
                    </Col>
                </Row> 
            </Container>   
        </div>
  );
}

export default ProductDetail;
