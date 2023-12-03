import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/CreateAccountPage.css';

function CreateAccount() {
  return (
    <div className="app-container">
      <Container fluid className="header">
        <Row>
          <Col>
            {/* Your main content goes here */}
          </Col>
        </Row>
      </Container>
      <Container fluid className="content-container">
        <Row>
          <Col className="logo">
            {/* Your main content goes here */}
            <h1>Insert Logo</h1>
          </Col>
        </Row>
        <Row>
          <Col className="create-account-title">
            {/* Your main content goes here */}
            <h1>Create Account</h1>
          </Col>
        </Row>
        <Row>
          <Col className="create-account-title">
            {/* Your main content goes here */}
            <h1>create account form</h1>
          </Col>
        </Row>
      </Container>
      
      <Container fluid className="footer">
        <Row>
          <Col>
            {/* Your footer content goes here */}
            <p>&copy; 2023 Your Company</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default CreateAccount;