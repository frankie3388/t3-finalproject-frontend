import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/CreateAccount-LoginPage.css';
import logo from '../docs/images/logo.png';
import Image from 'react-bootstrap/Image';
import LoginForm from '../components/LoginForm'

function Login() {
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
            <Image src={logo} alt="logo" fluid />;
          </Col>
        </Row>
        <Row>
          <Col className="create-account-title">
            {/* Your main content goes here */}
            <h1>Login</h1>
          </Col>
        </Row>
        <Row className="my-5 mx-auto form-container">
          <Col className="create-account">
            {/* Your main content goes here */}
            <LoginForm />
          </Col>
        </Row>
      </Container>
      <Container fluid className="footer">
        <Row>
          <Col>
            {/* Your footer content goes here */}
            <p>&copy; 2023 Travelling Diary</p>
          </Col>
        </Row>
      </Container>
      
    </div>
  );
}

export default Login;