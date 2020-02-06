import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col,Nav,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
import { isTemplateSpan } from 'typescript';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../products'
import MyNav from './MyNav'


function Center(props) {
    let match = useRouteMatch("/:cata");
    // console.log('match', match)
    // let prod_id = match.params.id
    
    const array =  Object.values(PRODUCTS);
   //these arries will hold the products in the columns
   let a_super=[]
   let a_rows = []
   for (let icount = 0; icount < array.length;icount = icount+4){
        let a_baby = array.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    // console.log(a_super)
    for (let item of a_super){
       a_rows.push(<Row>{item.map((col, index)=>{return <Col key={index}>
                    <ProductCard key={col.id+1} id={col.id} filename={col.filename} name={col.name} category={col.category}
                    price={col.price}/></Col>})}</Row>) 
    }

    // for(let item of unique_catagories){
    //     category_count[item.category]
    //     console.log(category_count)
    // }
    
    // console.log(array)
    return (
        <div
            className={props.className}
        >
            <Container>
                <MyNav></MyNav>
                {a_rows}
            </Container>   
            </div>
  );
}

export default Center;
