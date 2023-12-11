import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccount-LoginForm.css';
import { login } from '../functions/login';
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

function LoginForm() {

  // Destructure the context data object
  const { jwt, updateJwt } = useContext(AuthContext);

  // local form's state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // This useEffect shows the JWT after getting the JWT
  useEffect(() => {
    console.log(`JWT value is:\n${jwt}`);
    
  }, [jwt]);

  return (
    <Form className="create-account-form">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3} className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control 
            type="text" 
            placeholder="Email"
            // name="emailInput" 
            // id="emailInput" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)}  
          />
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
            // name="passwordInput" 
            // id="passwordInput" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
          />
        </Col>
      </Form.Group>
    
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 10 }}>
        <Button onClick={ async (event) => {
          event.preventDefault();
          try {
            const jwtData = await login(email, password);
            updateJwt(jwtData); // Use the updateJwt function from context
          } catch (error) {
            console.error("Error during login:", error);
          }
        }} 
            type="submit" 
            className="create-button"
          >
            Sign in
          </Button>
        </Col>
      </Form.Group>
      <p>Don't have an Account? Create one. <a href="./createaccount" className="createlink">Create Account</a></p>
    </Form>
  )
}

export default LoginForm;