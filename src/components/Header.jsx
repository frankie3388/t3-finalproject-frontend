import Searchbar from "./Searchbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useLocation } from 'react-router-dom'; 
import '../styling/Header.css';


function Header() {

  // This hook ensures that the Header component checks the path location
  const { pathname } = useLocation();

  // Do not render the header on the Login and Create Account pages
  if (pathname === '/' || pathname === '/createaccount') {
    return null;
  }

  return (
      <Row className="box">
        <Col xs={5} className="container-one">
          <h1>Travelling Diary</h1>
        </Col>
        <Col className="container-two">
          <Searchbar />
        </Col>
      </Row>
  )
}

export default Header;