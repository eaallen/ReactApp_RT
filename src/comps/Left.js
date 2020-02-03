import React from 'react';
import PRODUCTS from '../product_images/src/products'
import { Button, Nav, Card, Accordion  } from 'react-bootstrap';



function Left(props) {
    
    const array =  Object.values(PRODUCTS);
    //these arries will hold the products in the columns
    let a_super=[]
    let a_of_cata = []
    for (let icount = 0; icount < array.length;icount = icount+4){
         let a_baby = array.slice(icount,icount+4)
         a_super.push(a_baby)
    }
    //geting list of catagories
    let catagories = array.map(item => item.category)
    //making it a unique list
    let unique_catagories = catagories.filter((value, index, _self)=> _self.indexOf(value)===index);
    for(var u_item of unique_catagories){
        let a_items = []
        for(var item of catagories){
            if (item === u_item){
                a_items.push(item)
            }
        }
        a_of_cata.push(a_items)

    }
    for(let item of a_of_cata){
        console.log(item[0],item.length)
    }
    
    console.log('left',a_of_cata)
    



    return (
        <div
            className={props.className}
            style={{
                padding: '1rem',
            }}
        >
            <Nav defaultActiveKey="/" className="flex-column">
                {a_of_cata.map((item,index)=>{ return <Nav.Link href='/home'key={index}>{item[0]} ({item.length})</Nav.Link> })}
            </Nav>

            {/* <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            
                            <p style={{fontSize: '2rem', }}><i className="fas fa-bars" style={{fontSize: '2rem', }}></i> Map</p>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Nav defaultActiveKey="/" className="flex-column">
                                <Nav.Link href="/">Home</Nav.Link>
                                <Nav.Link href="/About">About Us</Nav.Link>
                                <Nav.Link href="/Help">Help</Nav.Link>
                                <Nav.Link eventKey="link-2">Order New Assay</Nav.Link>
                                
                            </Nav>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> <br/> */}
            
        </div>
  );
}

export default Left;
