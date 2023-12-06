import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styling/components/NavBar.css'

function NavBar() {
    return (
        <Row xs={5} className="navbar-container">
            <Col className="navbar-item">
                <h6>Log Out</h6>
            </Col>
            <Col className="navbar-item">
                <h6>Dash Board</h6>
            </Col>
            <Col className="navbar-item">
                <h6>Blog List</h6>
            </Col>
            <Col className="navbar-item">
                <h6>Create Post</h6>
            </Col>
            <Col className="navbar-item">
                <h6>User Profile</h6>
            </Col>
        </Row>
    )
}

export default NavBar;