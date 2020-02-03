import React from 'react';

import { Container, Row, Col,Navbar,DropdownButton,Dropdown,ButtonGroup } from 'react-bootstrap';


function Top(props) {
    const[user, setUser] = React.useState(true) 
    
    const log_out = e =>{
        // e.preventDefault()
        setUser(false)
        console.log('user in', setUser)
    }
    return (
        <div
            className={props.className}
        >
         {console.log('user in', user)}   
        <Row>
                <Col sm={10} style={{
                    fontSize: '3rem',
                    color: 'white'
                    }}
                >
                    Rat Tunnels 
                    
                </Col>
                <Col sm={2}> 
                    <Navbar className="text-light">
                        <div className="mb-2">
                            {['right'].map(direction => (
                            <>
                                <DropdownButton
                                    as={ButtonGroup}
                                    key='right'
                                    id={`dropdown-button-drop-${direction}`}
                                    drop='right'
                                    variant="primary"
                                    title= {<i className="fas fa-chess-king"
                                                style={{
                                                    fontSize: '3rem',
                                                    paddingLeft: 'auto',
                                                    paddingRight: 'auto',
                                                    textAlign: 'center'                                                    
                                                }}
                                            ></i>}
                                    
                                >
                                <Dropdown.Item key="1" className='text-primary'>Elijah Allen</Dropdown.Item>
                                <Dropdown.Item key="2" href="/Help">Assay Stats</Dropdown.Item>
                                <Dropdown.Item key="3" href="/Account">Account</Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item key="4" className='text-danger' href='/Login' onClick={log_out}>Sign Out</Dropdown.Item>
                                </DropdownButton>{''}
                            </>
                            ))}
                        </div>
                    </Navbar>
                </Col>
            </Row>
        </div>
  );
}

export default Top;
