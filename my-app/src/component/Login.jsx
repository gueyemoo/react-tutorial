// Import de react et useState
import React, { useState } from "react";

// Import du composant "Form" de react-bootstrap
import Form from "react-bootstrap/Form";

// Import du composant "Button" de react-bootstrap
import Button from "react-bootstrap/Button";

//Import du css du composant Login
import "./Login.css";

// Composant fonctionnel Login
export default function Login() {

  // Exemple de Hooks: useState(), ici notre valeur par défaut est: "".
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Fonction de validation du formulaire, empêche la validation si aucun champ n'est rempli.
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  // Gère l'action après avoir valider l'envoie du formulaire.
  function handleSubmit(event) {
    event.preventDefault();
  }

  // return() : tout ce qui se trouve dans ce return sera affiché par le composant Login.
  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>{/* Passage du Props "handleSubmit" au composant Form de react-bootstrap */}
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
