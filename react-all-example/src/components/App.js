import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/App.css';
import Home from "./Home";
import Multistep from "./Multistep";
import Topics from "./Topics";
import Hook from "./Hook";
import Currency from "./currency-calculator/App";
import Button from "./Button";

function BasicExample() {
  return (   
    <Router>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/hook" className="nav-link">Hook Example</Link>
      <Link to="/currency" className="nav-link">Currency Calculator</Link>
      <Link to="/topics" className="nav-link">Topics</Link>
      <Link to="/multistep_form" className="nav-link">Multistep</Link>
      <Link to="/button" className="nav-link">Button Example</Link>
    </Nav>
    </Navbar>
        <Route exact path="/" component={Home} />
        <Route path="/hook" component={Hook} />
        <Route path="/currency" component={Currency} />
        <Route path="/topics" component={Topics} />
        <Route path="/multistep_form" component={Multistep} />
        <Route path="/button" component={Button} />
           
    </Router>
    
  );
}
export default BasicExample;
