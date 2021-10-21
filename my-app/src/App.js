import './App.css';

import { Switch, Route } from 'react-router-dom';

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { LinkContainer } from "react-router-bootstrap";

// Import du composant de Login
import Login from "./component/Login";

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect bg="light" expand="md" className="mb-3">
        <LinkContainer to="/">
          <Navbar.Brand className="font-weight-bold text-muted">
            Scratch
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav activeKey={window.location.pathname}>
            <LinkContainer to="/signup">
              <Nav.Link>Signup</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Gestion des routes */}
      <div className="routes">
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          {/* Ajouter votre code ici  */}

          {/*FIN Ajouter votre code ici  */}
        </Switch>
      </div>
    </div>

  );
}

export default App;
