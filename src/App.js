import React from 'react';
import Bottom from './comps/Bottom';
import Help from './comps/Help';
import About from './comps/About';
import Left from './comps/Left';
import Right from './comps/Right';
import Center from './comps/Center';
import Top from './comps/Top';
import Account from './comps/Account';
import Login from './comps/Login';
import SignUp from './comps/SignUp';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './index.scss'
import { Container, Row, Col,Navbar } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      
        <Row>
          <Col xl={12}>
            {/* <Navbar> */}
              <Top className="bg-dark"></Top>
            {/* </Navbar>  */}
          </Col>
        </Row>
        <Row noGutters>
          <Col xl={2}>
            <Left className="bg-warning h-100 w-100"></Left>
          </Col>
          <Col xl={8} >
            <Router>
               <div>
                {/* A <Switch> looks through its children <Route>s and
                    renders the first one that matches the current URL. */}
                <Switch>
                <Route path="/SignUp">
                    <SignUp />
                  </Route>
                  <Route path="/Account">
                    <Account />
                  </Route>
                  <Route path="/Login">
                    <Login />
                  </Route>
                  <Route path="/About">
                    <About />
                  </Route>
                  <Route path="/Help">
                    <Help />
                  </Route>
                  <Route path="/">
                    <Center />
                  </Route>
                </Switch>
              </div>
            </Router>           
          </Col>
          <Col xl={2}>
            <Right className="bg-success h-100"></Right>
          </Col>         
          
        </Row>
        <Row>
          <Col xl={12}>
            <Bottom className="text-light bg-danger"></Bottom>
          </Col>
        </Row>      
      
      
      
    </div>
  );
}

export default App;
