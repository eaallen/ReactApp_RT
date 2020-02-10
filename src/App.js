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
import Filter from './comps/Filter';
import ProductDetail from './comps/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss'
import './index.scss'
import { Row, Col} from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Msg404 from './comps/Msg404';

function App() {
  
  return (
    <div className="App">
      
      
        <Row>
          <Col xl={12}>
            {/* <Navbar> */}
              <Top className="bg-primary"></Top>
            {/* </Navbar>  */}
          </Col>
        </Row>
        <Row noGutters>
          <Col xl={2}>
            <Left className=" h-100 w-100"></Left>
          </Col>
          <Col xl={8} >
            <Router>
               <div>
                
                <Switch>
                  
                  <Route path="/filter/:cata" key='filter' >
                    <Filter />
                  </Route>
                  <Route path="/product/:id" >
                    <ProductDetail />
                  </Route>
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
                  <Route exact path="/" key='error'>
                    <Center style={{padding: '2rem'}} />
                  </Route>
                  <Route>
                    <Msg404 />
                  </Route>
                </Switch>
              </div>
            </Router>           
          </Col>
          <Col xl={2}>
            <Right className=" h-100"></Right>
          </Col>         
          
        </Row>
        <Row>
          <Col xl={12}>
            <Bottom className="text-light bg-danger "></Bottom>
          </Col>
        </Row>      
      
      
      
    </div>
  );
}

export default App;
