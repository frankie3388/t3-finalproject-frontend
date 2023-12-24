import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccount-LoginForm.css';
import { login } from '../functions/login'; // Function for handling login
import { useEffect, useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Functional component for LoginForm. This component is responsible for
// sending a request to the server to login.
function LoginForm() {

  const navigate = useNavigate();

  // Destructure the context data object
  const { jwt, loginJwt } = useContext(AuthContext);

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
        <Form.Label column sm={3} data-testid="email-test" className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control 
            type="text" 
            placeholder="Email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)}  
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={3} data-testid="password-test" className="label">
          Password
        </Form.Label>
        <Col sm={9}>
          <Form.Control 
            type="password" 
            placeholder="Password" 
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
            // Attempt to log in using the provided email and password with the
            // login function from login.js file.
            const jwtData = await login(email, password);
            if (jwtData.jwt) {
              // If login is successful, data.jwt will contain the JWT token
              // and set the AuthContextProvider with the JWT token.
              loginJwt(jwtData.jwt);
              // Upon successful login, redirect to bloglist page.
              navigate("/bloglist"); 
            } else if (jwtData.message) {
              console.error("Login failed:", jwtData.message);
              alert(`Login failed: ${jwtData.message}`);
            }
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
      <p>
        Don't have an Account? Create one.{' '}
        <span
          className="createlink"
          onClick={() => navigate('/createaccount')}
        >
          Create Account
        </span>
      </p>
    </Form>
  )
}

// Exporting the LoginForm component for use in other parts of the application
export default LoginForm;