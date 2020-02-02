import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
import { isTemplateSpan } from 'typescript';
import PRODUCTS from '../product_images/src/products'

function Center(props) {
    
   const array =  Object.values(PRODUCTS);
   //these arries will hold the products in the columns
   let a_super=[]
   let rows = []
   let cols = []
   for (let icount = 0; icount < array.length;icount = icount+4){
        let a_baby = array.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    console.log(a_super)
    for (let item of a_super){
       rows.push(<Row>{item.map((col, index)=>{return <Col key={index}>
                    <ProductCard id={col.id} filename={col.filename} name={col.name} catagory={col.category}
                    price={col.price}/></Col>})}</Row>) 
    }
    
    
    console.log(array)
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
                
                {rows}
            </Container>   
            </div>
  );
}

export default Center;
