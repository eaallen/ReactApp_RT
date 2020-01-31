import React from 'react';
import App from '../App';
import { Button, Nav, Card, Accordion  } from 'react-bootstrap';



function Left(props) {
    let[word, setWord] = React.useState('')
    const getvalue = e =>{
        
        setWord = e.target.value;
        console.log(setWord)
    }

    return (
        <div
            className={props.className}
            style={{
                padding: '1rem',
            }}
        >
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            <i className="fas fa-bars" style={{fontSize: '2rem', }}></i>
                        </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Nav defaultActiveKey="/home" className="flex-column">
                                <Nav.Link href="/Center">Home</Nav.Link>
                                <Nav.Link href="/About">About Us</Nav.Link>
                                <Nav.Link href="/Help">Help</Nav.Link>
                                <Nav.Link eventKey="link-2">Order New Assay</Nav.Link>
                                
                            </Nav>

                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion> <br/>
            <Nav defaultActiveKey="/home" className="flex-column">
                <h2>Submit Assay</h2>
                <input type="text" onChange={getvalue} style={{
                    marginBottom: '.5rem',
                    
                }}/>
                    
                <Button >
                    Submit
                </Button>
            </Nav>    

            
        </div>
  );
}

export default Left;
