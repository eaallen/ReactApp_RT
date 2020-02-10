import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';

function Help(props){

    return(
        <div>
            
            <Jumbotron className="text-center">
                <h1>Help</h1>
                <i className="fas fa-hands-helping" style={{
                    fontSize: '30rem',
                }}></i>
            </Jumbotron>
            <Row  className='center-row'>
                <Col>
                    <h1>
                        Submit an Assay
                    </h1>
                    <Container>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                    </Container>

                </Col>
                <Col>
                    <h1>
                        Call Tech Support
                    </h1>
                    <Container>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                    </Container>

                
                </Col>
                <Col>
                    <h1>
                      Restart Computer 
                    </h1>
                    <Container>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                    </Container>

                </Col>
            </Row>    








        </div>
    )
}
export default Help;