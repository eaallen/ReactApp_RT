import React from 'react';
import { Container, Row, Col,Jumbotron } from 'react-bootstrap';

function About(props){

    return(
        <div>

            <Jumbotron className='text-center'>
                <h1>About Us</h1>
            </Jumbotron>

            <Row  className='center-row'>
                <Col>
                    <h1>
                        Our Mission
                    </h1>
                    <Container>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                    </Container>
                </Col>
                <Col>
                    <h1>
                        Our Founders
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>
                
                
                </Col>
                <Col>
                    <h1>
                      Our Legeacy
                    </h1>
                    <p>
                        Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur

                    </p>

                </Col>
            </Row>    








        </div>
    )
}
export default About;