import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col,Nav,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
import { isTemplateSpan } from 'typescript';
import PRODUCTS from '../product_images/src/products'

function Center(props) {
    
   const array =  Object.values(PRODUCTS);
   //these arries will hold the products in the columns
   let a_super=[]
   let rows = []
   for (let icount = 0; icount < array.length;icount = icount+4){
        let a_baby = array.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    // console.log(a_super)
    for (let item of a_super){
       rows.push(<Row>{item.map((col, index)=>{return <Col key={index}>
                    <ProductCard key={col.id+1} id={col.id} filename={col.filename} name={col.name} catagory={col.category}
                    price={col.price}/></Col>})}</Row>) 
    }
    
    function filter(cata){
        if(cata ==='all'|| cata==null){return rows}
        let f_cata = rows.filter(item=> item.catagory === cata)
        return f_cata
    }
    
    //geting list of catagories
    let catagories = array.map(item => item.category)
    //making it a unique list
    let unique_catagories = catagories.filter((value, index, _self)=> _self.indexOf(value)===index);
    console.log('catagories',unique_catagories)
    
    
    // console.log(array)
    return (
        <div
            className={props.className}
        >
            <Nav defaultActiveKey="/">
                <Nav.Item>
                    <Nav.Link href="/" onClick={filter('all')}>All</Nav.Link>
                </Nav.Item>
                {unique_catagories.map(item =>{return <Nav.Item key={item+'parent'}> 
                    <Nav.Link href="/" key={item}>{item}</Nav.Link> </Nav.Item>})}
            </Nav>
            <Container>                
                {rows}
            </Container>   
            </div>
  );
}

export default Center;
