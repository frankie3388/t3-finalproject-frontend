import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import '../styling/CreateAccountForm.css';

function CreateAccountForm() {
    return (
    <Form className="create-account-form">
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={3} className="label">
          Email
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={3} className="label">
          Password
        </Form.Label>
        <Col sm={9}>
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3">
        <Col sm={{ span: 3, offset: 10 }}>
          <Button type="submit" className="create-button">Create</Button>
        </Col>
      </Form.Group>
      <p>Already have an account? Login</p>
    </Form>
    )
}

export default CreateAccountForm;