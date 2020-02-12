import React, { useState } from 'react';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../products'
import { Container, Row, Col, } from 'react-bootstrap';
import Msg404 from './Msg404';
import PurchaseForm from './PurchaseForm'

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
        <div style={{padding: '2rem'}}>
            
            <Container>
                <Row>
                    <Col md={10}>
                    
                        
                        <div> <div className="float-right text-center">
                                <img src={`../product_images/${product.filename}-${_img}.png`} style={{marginLeft: '15px'}} alt="uh-oh"/>
                                <br/>
                                {arr.map(item => {return <img src={`../product_images/${product.filename}-${item}.png`} style={{width: '50px'}} id={item} key={item+3} onMouseEnter={handle_change} alt="uh-oh"/>
                                })}
                            </div>
                            <br></br>
                            <h3>
                                {product.name}
                            </h3>
                            {product.description}
                            
                        </div>
                        <br/>
                        <div>
                        <PurchaseForm product = {product}></PurchaseForm>
                        </div>
                        
                    
                        
                       
                    </Col>
                </Row> 
            </Container>   
        </div>
  );
}

export default ProductDetail;
