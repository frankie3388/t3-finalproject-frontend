import Searchbar from "./Searchbar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/Header.css';

function Header() {
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