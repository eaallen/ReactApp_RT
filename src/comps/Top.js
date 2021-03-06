import React from 'react';

import {Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup, Nav } from 'react-bootstrap';


function Top(props) {
    const[user, setUser] = React.useState(true) 
    
    const log_out = e =>{
        // e.preventDefault()
        setUser(false)
        console.log('user in', user)
    }
    return (
        <div
            className={props.className}
        >
            <Row>
                <Col sm={5} style={{
                    fontSize: '3rem',
                    color: 'white',
                    paddingLeft: '1rem',
                    }}
                >
                Rat Tunnels
                   
                    
                </Col>
                <Col className='text-light' sm={4}>
                   <Navbar className="text-light"> 
                       <Nav defaultActiveKey="/" className="text-light">
                            <Nav.Link className='text-light' href="/">Home</Nav.Link>
                            <Nav.Link className='text-light' href="/About">About Us</Nav.Link>
                            <Nav.Link className='text-light' href="/Help">Help</Nav.Link>                                
                        </Nav>
                    </Navbar> 
                </Col>
                <Col sm={3}> 
                    <Navbar className="text-light text-right">
                        <div className="mb-2">
                            {['right'].map(direction => (
                            <div key='xx6'>
                                <DropdownButton
                                    as={ButtonGroup}
                                    
                                    id={`dropdown-button-drop-${direction}`}
                                    drop='right'
                                    variant="primary"
                                    title= {<i  className="fas fa-chess-king"
                                                style={{
                                                    fontSize: '3rem',
                                                    textAlign: 'right'                                                    
                                                }}
                                            ></i>}
                                    
                                >
                                <Dropdown.Item className='text-primary'>Elijah Allen</Dropdown.Item>
                                <Dropdown.Item href="/Help">Assay Stats</Dropdown.Item>
                                <Dropdown.Item href="/Account">Account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item className='text-danger' href='/Login' onClick={log_out}>Sign Out</Dropdown.Item>
                                </DropdownButton>{''}
                            </div>
                            ))}
                        </div>
                    </Navbar>
                </Col>
            </Row>
        </div>
  );
}

export default Top;
