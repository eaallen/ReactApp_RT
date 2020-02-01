import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
import { isTemplateSpan } from 'typescript';
import PRODUCTS from '../product_images/src/products'

function Center(props) {
    
    // const elements = ['one', 'two', 'three'];

    // const items = []

    // for (const [index, value] of elements.entries()) {
    //     items.push(<li key={index}>{value}</li>)
    // }    
    
    // const Names = ['eli','jack','jill','kandin'];

    // const cards = [];
    // for (const [index, value] of PRODUCTS.entries()){
    //     cards.push(<ProductCard id={index} info={value} />)
    // }

    return (
        <div
            className={props.className}
        >
            {/* <Jumbotron className="text-center">
                <h1>Home</h1>
                <i class="fab fa-jedi-order" style={{
                    fontSize: '30rem',
                    color: 'gold',
                    textAlign: 'center',
                    }}>
                </i>          

            </Jumbotron> */}
            <Container>
            <Row>
                <Col>
                   
                    {Object.values(PRODUCTS).map( item => {return <ProductCard id={item.id} price={item.price} name={item.name}/> })}
                    
                </Col>
                <Col>
                    <ProductCard/>
                </Col>
                <Col>
                    <ProductCard/>
                </Col>
                <Col>
                    <ProductCard/>
                </Col>
            </Row> 
            </Container>   
            </div>
  );
}

export default Center;
