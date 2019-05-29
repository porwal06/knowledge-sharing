import React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Route, Link } from "react-router-dom";

function Topics({ match }) {
  return (
    <Container>
      <h2>Topics</h2>
      <Nav variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Link to={`${match.url}/rendering`} className="nav-link">Rendering with React</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to={`${match.url}/components`} className="nav-link">Components</Link>
  </Nav.Item>
  <Nav.Item>
    <Link to={`${match.url}/props-v-state`} className="nav-link">Props v. State</Link>
  </Nav.Item>
</Nav>
      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </Container>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default Topics;