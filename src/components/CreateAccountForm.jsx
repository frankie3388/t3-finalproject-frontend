import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccount-LoginForm.css';
import { useEffect, useState } from 'react'; // React hooks for managing state and side effects
import { create } from '../functions/create-account'; // Function to handle account creation
import { useNavigate } from 'react-router-dom'; // React Router hook for navigation


// This create account form component is reponsible for creating user accounts.
function CreateAccountForm() {

  const navigate = useNavigate();

    // local form's state
    const [user, setUser] = useState(null);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [regionsOfInterest, setRegionsOfInterest] = useState("");
    const [countriesOfInterest, setCountriesOfInterest] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
  
  
    // This useEffect shows that the user was created
    useEffect(() => {
      console.log(`Created account:\n${user}`);
      // Check if user is not null and it has an error property
      if (user && user.error) {
        setErrorMessage(user.error);
      } else if (user) {
        setErrorMessage("Successfully created account. Redirecting to Login page....")
        setTimeout(() => {
          // Redirect to another page upon successful user creation after 3 seconds
          navigate('/'); // Replace '/success' with the path you want to redirect to
        }, 3000);
      }
    // eslint-disable-next-line
    }, [user]);
  
    return (
    <Form className="create-account-form">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3} data-testid="email-test" className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="email"
            placeholder="Email"
            value={email} 
            onChange={(event) => setEmail(event.target.value)} />
          {/* Ternary operation - to display error message if email or username exists */}
          {user && user.error ? <Form.Label className="label">{user.error}</Form.Label> : null}
            
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
            onChange={(event) => setPassword(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="firstname">
        <Form.Label column sm={3} data-testid="firstName-test" className="label">
          First Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="First Name"
            value={firstName} 
            onChange={(event) => setFirstName(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="lastname">
        <Form.Label column sm={3} data-testid="lastName-test" className="label">
          Last Name
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Last Name"
            value={lastName} 
            onChange={(event) => setLastName(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="username">
        <Form.Label column sm={3} data-testid="username-test" className="label">
          Username
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Username"
            value={username} 
            onChange={(event) => setUsername(event.target.value)}  />

          {/* Ternary operation - to display error message if email or username exists */}
          {user && user.error ? <Form.Label className="label">{user.error}</Form.Label> : null}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="regionsofinterest">
        <Form.Label column sm={3} data-testid="regionsOfInterest-test" className="label">
           Regions of Interest
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Regions of Interest"
            value={regionsOfInterest} 
            onChange={(event) => setRegionsOfInterest(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="countriesofinterest">
        <Form.Label column sm={3} data-testid="countriesOfInterest-test" className="label">
          Countries of Interest
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            placeholder="Countries of Interest"
            value={countriesOfInterest} 
            onChange={(event) => setCountriesOfInterest(event.target.value)}  />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 10 }}>
          {/* This onClick event on the Create Button sends a post request 
          to the 'users/createuser' route on the server to create the user*/}
          <Button onClick={ async (event) => {
            event.preventDefault();
              // create function is used from the create-account.js file
              const newUser = await create(email, password, firstName, lastName, username, regionsOfInterest, countriesOfInterest);
              setUser(newUser); 
          }}  
          type="submit"
          className="create-button"
          >
            Create
          </Button>
        </Col>
      </Form.Group>
      <p>Already have an account?{' '}
        <span
          className="createlink"
          // onClick used to redirect to login page '/'
          onClick={() => navigate('/')}
        >
          Login
        </span>
      </p>
      {/* Message to be displayed if an account has been created or not */}
      {errorMessage && <Form.Label className="error-message">{errorMessage}</Form.Label>}
    </Form>
    )
}

export default CreateAccountForm;