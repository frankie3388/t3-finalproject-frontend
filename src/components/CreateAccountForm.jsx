import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccount-LoginForm.css';
import { useEffect, useState } from 'react';
import { create } from '../functions/create-account';

function CreateAccountForm() {

    // local form's state
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
  
    // This useEffect shows the JWT after getting the JWT
    useEffect(() => {
      console.log(`Created account:\n${user}`);
      
    }, [user]);
  
    return (
    <Form className="create-account-form">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3} className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={3} className="label">
          Password
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password} 
            onChange={(event) => setPassword(event.target.value)}  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 10 }}>
          <Button onClick={ async (event) => {
            event.preventDefault();
            try {
              const newUser = await create(email, password);
              setUser(newUser); // Use the updateJwt function from context
            } catch (error) {
              console.error("Error during login:", error);
            }
          }}  
          type="submit"
          className="create-button"
          >
            Create
          </Button>
        </Col>
      </Form.Group>
      <p>Already have an account? <a href="./" className="createlink">Login</a></p>
    </Form>
    )
}

export default CreateAccountForm;