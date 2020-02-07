import React from 'react';
import ProductCard from './ProductCard';
import { Container, Row, Col,Nav,DropdownButton,Dropdown,ButtonGroup,Jumbotron } from 'react-bootstrap';
import { isTemplateSpan } from 'typescript';
import { useRouteMatch} from "react-router-dom";
import PRODUCTS from '../products'
import MyNav from './MyNav'
import Msg404 from './Msg404'

function Filter(props) {
    
    let match = useRouteMatch("/filter/:cata");
    // console.log('match', match)
    let category_id = match.params.cata
    const array =  Object.values(PRODUCTS);
    
   const a_filtered = array.filter(obj =>  obj.category === category_id)
   
   if(a_filtered.length===0){
    return <Msg404 msg={category_id}></Msg404>
   }

   console.log('filtered arry', a_filtered)
   //these arries will hold the products in the columns
   let a_super=[]
   let rows = []
   for (let icount = 0; icount < a_filtered.length;icount = icount+4){
        let a_baby = a_filtered.slice(icount,icount+4)
        a_super.push(a_baby)
    }
    // console.log(a_super)
    for (let item of a_super){
       rows.push(<Row>{item.map((col, index)=>{return <Col key={index} md={3}>
                    <ProductCard key={col.id+1} id={col.id} filename={col.filename} name={col.name} category={col.category}
                    price={col.price}/></Col>})}</Row>) 
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
            <Container>
                <MyNav category={unique_catagories}/>            
                {rows}
            </Container>   
            </div>
  );
}

export default Filter;
